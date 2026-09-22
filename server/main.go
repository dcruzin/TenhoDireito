package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	staticDir := os.Getenv("STATIC_DIR")
	if staticDir == "" {
		staticDir = "dist"
	}

	files := http.FileServer(http.Dir(staticDir))
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		requested := filepath.Join(staticDir, filepath.Clean(r.URL.Path))
		if info, err := os.Stat(requested); err == nil && !info.IsDir() {
			files.ServeHTTP(w, r)
			return
		}

		if r.URL.Path != "/" {
			http.ServeFile(w, r, filepath.Join(staticDir, "index.html"))
			return
		}
		files.ServeHTTP(w, r)
	})

	server := &http.Server{
		Addr:              ":" + port,
		Handler:           securityHeaders(handler),
		ReadHeaderTimeout: 5 * 1e9,
	}

	log.Printf("TenhoDireito disponível em http://localhost:%s", port)
	log.Fatal(server.ListenAndServe())
}

func securityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")
		w.Header().Set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
		next.ServeHTTP(w, r)
	})
}
