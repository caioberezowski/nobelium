/* eslint-disable react/jsx-no-undef */
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'
import acco24 from '../public/acco24.svg'

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
          <Image src="acco24.svg" alt="acco"/>
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <defs>
                  <style>
                    {'.cls-1'}
                    {'.cls-6{fill:#5e60ce;}'}
                    {'.cls-2{fill:#9eff5e;}'}
                    {'.cls-3{fill:none;}'}
                    {'.cls-4'}
                    {'.cls-5{fill:#f6ae2d;}'}
                    {'.cls-5'}
                    {'.cls-7{opacity:0.7;}'}
                    {'.cls-6{opacity:0.5;}'}
                    {'.cls-7'}
                    {'.cls-8{fill:#7400b8;}'}
                    </style>
                </defs>
                <g id="Camada_2" data-name="Camada 2">
                  <g id="Camada_2-2" data-name="Camada 2">
                    <g id="acco_24x24" data-name="acco 24x24">
                      <path class="cls-1" d="M1.9,5.53s0,0,0,0c7.11,1,6.39,13,20.29,12.81l.14-.22,0,0C10.46,13.69,13.49,2.49,1.9,5.53Z"/>
                      <path class="cls-2" d="M23.91,13.43c0,.05,0,.09,0,.14"/>
                      <path class="cls-3" d="M5.06,2.21A11.9,11.9,0,0,0,1.9,5.53c11.59-3,8.56,8.16,20.36,12.59l0,0a12.08,12.08,0,0,0,1.59-4.58C15,17.18,14.49,4.88,5.06,2.21Z"/>
                      <path class="cls-4" d="M5.24,2.08l-.18.13c9.43,2.67,9.93,15,18.84,11.36,0-.05,0-.09,0-.14C18.23,11.36,17.47,2.28,5.24,2.08Z"/>
                      <path class="cls-5" d="M23.91,13.43A11.32,11.32,0,0,0,24,12,12,12,0,0,0,5.24,2.08C17.47,2.28,18.23,11.36,23.91,13.43Z"/>
                      <path class="cls-6" d="M19,21.76a12.09,12.09,0,0,0,3.18-3.39C8.27,18.57,9,6.56,1.88,5.56A11.92,11.92,0,0,0,.15,10.08C8.25,6.76,13.33,20.52,19,21.76Z"/>
                      <path class="cls-7" d="M.15,10.08A9.92,9.92,0,0,0,0,11.19H0c5.29.9,8.67,12.12,18.28,11l.68-.45C13.33,20.52,8.25,6.76.15,10.08Z"/>
                      <path class="cls-8" d="M12,24a12,12,0,0,0,6.31-1.79C8.7,23.32,5.32,12.1,0,11.2c0,.26,0,.53,0,.8A12,12,0,0,0,12,24Z"/>
                    </g>
                  </g>
                </g>
              </svg>
                {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    className="fill-current text-black dark:text-white"
                  />
                  <rect width="24" height="24" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(45) scale(39.598)"
                    >
                      <stop stopColor="#CFCFCF" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#E9E9E9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg> */}
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
