import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('sticky-nav-full')
      } else {
        navRef.current.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <defs>
                  <style>.cls-1{fill:none;}.cls-2,.cls-6{fill:#5e60ce;}.cls-3{fill:#9eff5e;}.cls-4,.cls-5{fill:#f6ae2d;}.cls-5,.cls-7{opacity:0.7;}.cls-6{opacity:0.5;}.cls-7,.cls-8{fill:#7400b8;}</style>
                </defs>
                <g id="Camada_2" data-name="Camada 2">
                  <g id="Camada_2-2" data-name="Camada 2">
                    <path class="cls-1" d="M25.28,11.06A60.37,60.37,0,0,0,9.48,27.63c58-15.17,42.81,40.84,101.81,63l.25.11a59.69,59.69,0,0,0,7.95-22.9C71.91,76.06,57.5,27,25.28,11.06Z"/>
                    <path class="cls-2" d="M9.48,27.63c0,.05,0,0-.1.15,35.58,5,32,65.07,101.49,64.05l.67-1.1-.25-.11C52.29,68.47,67.47,12.46,9.48,27.63Z"/>
                    <path class="cls-3" d="M119.57,67.16c0,.22,0,.45-.08.67"/>
                    <path class="cls-4" d="M26.2,10.42l-.92.64C72.45,24.4,74.94,85.89,119.49,67.83c0-.22.06-.45.08-.67C91.15,56.79,87.33,11.41,26.2,10.42Z"/>
                    <path class="cls-5" d="M119.57,67.16A60,60,0,0,0,60,0,59.76,59.76,0,0,0,26.2,10.42C87.33,11.41,91.15,56.79,119.57,67.16Z"/>
                    <path class="cls-6" d="M94.94,108.78a60.28,60.28,0,0,0,15.93-17c-69.5,1-65.91-59-101.49-64A59.55,59.55,0,0,0,.77,50.38C41.24,33.8,66.66,102.59,94.94,108.78Z"/>
                    <path class="cls-7" d="M.77,50.38Q.32,53.13.14,55.94v0C26.61,60.49,43.49,116.59,91.57,111c1.15-.71,2.27-1.46,3.37-2.25C66.66,102.59,41.24,33.8.77,50.38Z"/>
                    <path class="cls-8" d="M60,120a59.77,59.77,0,0,0,31.57-9c-48.08,5.56-65-50.54-91.44-55C0,57.31,0,58.65,0,60A60,60,0,0,0,60,120Z"/>
                  </g>
                </g>
              </svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
