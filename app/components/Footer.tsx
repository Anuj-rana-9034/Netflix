import React from 'react'

const Footer = () => {
  return (
    <div className='sm:h-[450px] sm:p-28 sm:pb-0 pb-10 text-[grey]  bg-black border-t-4 border-[grey]'>
        <p className='pb-7'><a href="#">Questions? Call 000-800-919-1694</a></p>
        <ul className='flex sm:gap-28 '>
            <li className='sm:leading-10 leading-7'>FAQ
                <ul>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </li>
            <li className='sm:leading-10 leading-7'>Help Centre
            <ul>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
            </li>
            <li className='sm:leading-10 leading-7'>Account
            <ul>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </ul>
            </li>
            <li className='sm:leading-10 leading-7'>Media Centre
            <ul>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                   
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Footer