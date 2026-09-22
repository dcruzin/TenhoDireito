interface IconProps {
  name: string
  size?: number
}

export function Icon({ name, size = 20 }: IconProps) {
  const paths: Record<string, React.ReactNode> = {
    departure: <><path d="M5 12h12"/><path d="m13 8 4 4-4 4"/><path d="M6 5h10a2 2 0 0 1 2 2v1"/><path d="M6 19h10a2 2 0 0 0 2-2v-1"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="m8 15 2 2 5-5"/></>,
    exit: <><path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/></>,
    euro: <><path d="M18 7.5A7 7 0 1 0 18 17"/><path d="M5 10h9M5 14h8"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M5 3 3 5M19 3l2 2"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
    other: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m15 8 4 4-4 4"/></>,
    back: <><path d="M19 12H5"/><path d="m9 16-4-4 4-4"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 10 4.2-1.7 7-5.6 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    timer: <><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    document: <><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/></>,
    info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></>,
  }
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] ?? paths.info}
    </svg>
  )
}

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="TenhoDireito, início">
      <svg className="logo-mark" aria-hidden="true" viewBox="0 0 32 32"><path d="M16 2.5 27 7v8.1c0 6.5-4.2 12.1-11 14.4C9.2 27.2 5 21.6 5 15.1V7l11-4.5Z"/><path d="m10.5 15.8 3.4 3.4 7.6-8"/></svg>
      <span>Tenho<span>Direito</span></span>
    </a>
  )
}
