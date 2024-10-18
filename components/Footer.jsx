export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Better section */}
          <div>
            <h2 className="text-green-700 text-xl font-bold mb-4">Better</h2>
            <p className="text-gray-600 mb-4">
              Better is a family of companies serving all your homeownership needs.
            </p>
            <div className="space-y-2">
              <p className="text-green-600 font-semibold">Better Mortgage</p>
              <p className="text-gray-600">We can&apos;t wait to say &quot;Welcome home.&quot; Apply 100% online, with expert customer support.</p>

              <p className="text-green-600 font-semibold">Better Real Estate</p>
              <p className="text-gray-600">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>

              <p className="text-green-600 font-semibold">Better Cover</p>
              <p className="text-gray-600">Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>

              <p className="text-green-600 font-semibold">Better Inspect</p>
              <p className="text-gray-600">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>

              <p className="text-green-600 font-semibold">Better Settlement Services</p>
              <p className="text-gray-600">Get transparent rates when you shop for title insurance all in one convenient place.</p>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-gray-700 font-bold mb-4">Resources</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              <li>Free mortgage calculator</li>
              <li>Mortgage calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>HELOC vs cash-out refinance calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
              <li>Get home inspection</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-gray-700 font-bold mb-4">Company</h2>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning center</li>
              <li>FAQs</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          {/* Contact and Legal Section */}
          <div>
            <h2 className="text-gray-700 font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-2">hello@better.com</p>
            <p className="text-gray-600 mb-4">(415) 523-8837</p>
            <ul className="space-y-2 text-gray-600">
              <li>FAQ</li>
              <li>Glossary</li>
            </ul>

            <h2 className="text-gray-700 font-bold mt-6 mb-4">Legal</h2>
            <ul className="space-y-2 text-gray-600">
              <li>NMLS Consumer Access</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclosures & Licensing</li>
              <li>Affiliated Business</li>
              <li>Browser Disclaimer</li>
            </ul>

            {/* Equal Housing Logos */}
            <div className="flex space-x-3 mt-8">
              <svg data-qa="ehl-logo" aria-label="Ehl logo" role="img" fill="none" height="40" width="41" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M33.047 25.681H8.24V11.733l12.54-7.416 12.268 7.416v13.948zM20.78.106L1.292 11.287v4.04h2.986V29.22h32.516V15.328h3.04v-3.93L20.78.106z" fill="#6F7672" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M14.11 17.045h12.974v-3.432H14.11v3.432zM14.11 22.156h12.974v-3.432H14.11v3.432zM23.345 38.932h-.977v-2.49h1.086c.76 0 1.466.442 1.466 1.328 0 .996-.652 1.162-1.575 1.162zm.11-3.43h-2.28v4.373H23.4c1.79 0 2.822-.388 2.822-2.103 0-1.771-1.14-2.27-2.768-2.27zM36 37.112h-1.738v-.664h1.791c.489 0 .706.055.706.332 0 .332-.163.332-.76.332zm.71.936c.814-.11 1.195-.443 1.195-1.162 0-.996-.49-1.384-1.683-1.384h-3.149v4.373h1.194v-1.827h1.14l1.249 1.827h1.303l-1.249-1.827zM14.63 35.502v4.373h1.14v-2.657l2.28 2.657h1.357v-4.373h-1.14v2.712l-2.28-2.712H14.63zM3.438 35.502v4.373h4.288v-.941l-3.094-.055v-3.377H3.438zM8.954 39.875h4.18v-.941h-2.931v-.941h2.443v-.886h-2.443v-.664h2.931v-.94h-4.18v4.372zM27.56 35.502v4.373l4.125-.055v-.886h-2.931v-.941h2.497v-.886h-2.497v-.664h2.931v-.94H27.56zM13.145 32.887l.325-1.55.38 1.55h-.705zm.81-2.391h-.923l-1.086 3.93h.791l.24-.886h.977l.24.886h.846l-1.085-3.93zM7.681 32.987c0 .72-.054.885-.489.885-.38 0-.488-.221-.488-.94v-.942c0-.72.054-.94.543-.94.38 0 .434.11.434.885v1.052zm.6.886c.163-.332.218-.553.218-1.051v-.83c0-.942-.217-1.606-1.303-1.606-.977 0-1.303.554-1.303 1.55v1.052c0 1.328.76 1.383 2.986 1.383l.054-.276-.651-.222zM28.043 33.374c0 .609.38 1.107 1.248 1.107.706 0 1.357-.498 1.357-1.107 0-.941-1.737-1.384-1.737-1.993 0-.221.217-.332.434-.332.326 0 .489.221.652.554l.542-.222c-.054-.553-.434-.996-1.248-.996-.651 0-1.194.332-1.194.996 0 1.107 1.737 1.384 1.737 2.103 0 .277-.163.388-.489.388-.325 0-.543-.221-.651-.609l-.651.11zM23.946 32.986c0 .665-.163.886-.488.886-.434 0-.489-.277-.489-.83v-1.218c0-.498.055-.83.489-.83s.488.388.488.83v1.162zm-.486-2.601c-.814 0-1.303.443-1.303 1.494v1.273c0 .941.271 1.329 1.303 1.329 1.031 0 1.303-.443 1.303-1.495V31.77c0-.997-.272-1.384-1.303-1.384zM35.3 32.986c0 1.163.325 1.495 1.41 1.495.841 0 1.087-.402 1.087-.83v-1.273h-1.14v.608h.38v.443c0 .332-.109.498-.38.498-.543 0-.598-.387-.598-.94V32.1c0-.664.055-1.107.598-1.107.38 0 .597.276.65.664l.544-.221c-.054-.665-.489-1.052-1.249-1.052-1.085 0-1.302.608-1.302 1.439v1.162zM25.102 30.495v2.27c0 1.328.223 1.753 1.363 1.753.869 0 1.188-.48 1.188-1.643v-2.38h-.76v2.27c0 .885-.054 1.106-.488 1.106s-.489-.332-.489-1.162v-2.214h-.814zM32.355 30.496v3.93h.65v-2.657l.924 2.657h.977v-3.93h-.652v2.435l-.868-2.435h-1.032zM9.28 30.495v2.38c0 1.107.108 1.606 1.194 1.606 1.248 0 1.303-.61 1.303-1.716v-2.27h-.76v2.325c0 .775-.109.996-.489.996-.434 0-.489-.221-.489-1.107v-2.214h-.76zM19.152 30.496v3.93h.76v-1.772h.923v1.771h.76v-3.93h-.76v1.495h-.923v-1.494h-.76zM3.383 30.496v3.93h1.954v-.61H4.143V32.71h1.085v-.554H4.143v-1.051h1.194v-.61H3.383zM15.384 30.496v3.93h1.792v-.61h-1.14v-3.32h-.652zM31.047 34.425h.706v-3.93h-.706v3.93z" fill="#6F7672" fill-rule="evenodd"></path></svg>
              <svg aria-label="Eho logo" data-qa="eho-logo" fill="none" height="40" role="img" width="43" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.834 32.69H5.47v-.546H3.202v3.086h2.342v-.548h-1.71v-.797h1.504v-.547H3.834v-.648zm4.018 1.992l-.31-.292.331-.346.327.305c.085-.16.141-.373.141-.663 0-.864-.49-1.078-.837-1.078-.349 0-.839.215-.839 1.078 0 .864.49 1.078.838 1.078a.75.75 0 00.349-.082zm.811.105l.336.316-.34.35-.365-.35c-.292.174-.61.208-.79.208-.409 0-1.483-.176-1.483-1.625 0-1.447 1.074-1.623 1.482-1.623.409 0 1.483.175 1.483 1.623 0 .508-.134.86-.323 1.101zm2.089.523c.777 0 1.268-.348 1.268-1.16v-2.006h-.658v2.032c0 .374-.18.589-.623.589-.3 0-.55-.188-.55-.62v-2.001h-.657v2.045c.008.309.073.56.24.748.275.305.696.373.98.373zm3.004-2.47h-.01l-.396 1.22h.788l-.382-1.22zm.562 1.752h-1.14l-.214.638h-.678l1.1-3.086h.744l1.086 3.086h-.7l-.198-.638zm3.58.08h-1.535v-2.528h-.645v3.086h2.18v-.559zm2.444.558v-1.385h1.203v1.385h.644v-3.086h-.644v1.168h-1.203v-1.168h-.644v3.086h.644zm3.913-2.622c-.347 0-.837.215-.837 1.078 0 .864.49 1.078.837 1.078.35 0 .84-.214.84-1.078 0-.864-.49-1.078-.84-1.078zm0 2.702c-.406 0-1.481-.175-1.481-1.624 0-1.448 1.075-1.623 1.481-1.623.41 0 1.484.175 1.484 1.623 0 1.45-1.074 1.624-1.484 1.624zm3.293 0c.778 0 1.268-.348 1.268-1.16v-2.006h-.657v2.032c0 .374-.18.589-.623.589-.302 0-.552-.188-.552-.62v-2.001h-.656v2.045c.008.309.072.56.24.748.276.305.696.373.98.373zm3.102-.532c-.562 0-.648-.327-.654-.499h-.617c0 .382.193 1.032 1.318 1.032.271 0 1.216-.081 1.216-1.01 0-.554-.386-.727-.807-.83l-.753-.185c-.128-.03-.325-.08-.325-.322 0-.279.292-.37.536-.37.563 0 .615.328.632.465h.62c-.005-.378-.258-.996-1.204-.996-1.001 0-1.187.605-1.187.95 0 .678.479.789.978.904h.003l.33.078c.327.077.56.143.56.382 0 .328-.341.4-.646.4zm1.793.452h.643v-3.086h-.643v3.086zm3.82-3.086h-.602v2.149h-.01l-1.224-2.15h-.679v3.087h.601v-2.202h.011l1.258 2.202h.644v-3.086zm3.445 1.422H38.42v.52h.717c-.132.623-.606.678-.748.678-.438 0-.898-.218-.898-1.061 0-.79.425-1.108.886-1.108.454 0 .674.387.674.508h.644c-.032-.427-.407-1.04-1.353-1.04-1.039-.005-1.508.79-1.508 1.632 0 1.083.675 1.615 1.418 1.615.556 0 .793-.273.956-.46l.006-.007.065.387h.429v-1.664zM4.547 37.295c-.348 0-.837.215-.837 1.079 0 .863.49 1.08.837 1.08.348 0 .838-.217.838-1.08 0-.864-.49-1.08-.838-1.08zm0 2.705c-.408 0-1.482-.178-1.482-1.626S4.14 36.75 4.547 36.75c.408 0 1.482.176 1.482 1.624C6.03 39.822 4.955 40 4.547 40zm3.249-2.637v.907h.597c.481 0 .481-.343.481-.48 0-.301-.168-.427-.567-.427h-.511zm.738 1.441h-.738v1.113H7.15v-3.086H8.56c.598 0 .958.383.958.989 0 .279-.154.984-.984.984zm2.733-1.441v.907h.598c.48 0 .48-.343.48-.48 0-.301-.168-.427-.567-.427h-.51zm.74 1.441h-.74v1.113h-.644v-3.086h1.41c.597 0 .958.383.958.989 0 .279-.156.984-.985.984zm3.433-1.51c-.35 0-.838.216-.838 1.08 0 .863.489 1.08.838 1.08.347 0 .838-.217.838-1.08 0-.864-.491-1.08-.838-1.08zm0 2.706c-.409 0-1.482-.178-1.482-1.626s1.073-1.624 1.482-1.624c.408 0 1.482.176 1.482 1.624 0 1.448-1.075 1.626-1.482 1.626zm3.236-2.637v.826h.755c.336 0 .498-.116.498-.421 0-.163-.072-.405-.45-.405h-.803zm0 2.555h-.633v-3.086h1.56c.821 0 .97.605.97.872 0 .34-.17.632-.475.734.253.112.39.206.39.784 0 .45 0 .561.138.612v.084h-.714c-.043-.148-.067-.307-.067-.624 0-.421-.027-.584-.504-.584h-.665v1.208zm3.655 0h.644v-2.54h.933v-.547H21.4v.546h.932v2.54zM26.1 40c.779 0 1.268-.35 1.268-1.162V36.83h-.657v2.033c0 .373-.18.59-.623.59-.3 0-.55-.191-.55-.62V36.83h-.656v2.046c.007.309.072.558.24.747.275.304.696.376.978.376zm4.99-3.169h-.603v2.148h-.007l-1.226-2.148h-.679v3.087h.603v-2.202h.007l1.26 2.202h.645V36.83zm1.172 3.087h.646V36.83h-.646v3.087zm2.518 0h.645v-2.54h.933v-.547h-2.508v.546h.93v2.54zm3.369 0h.645V38.76l1.032-1.929h-.73l-.612 1.342-.64-1.342h-.76l1.065 1.921v1.166zM.667 10.232L21.442 0l21.085 10.232v4.806h-2.792v14.418H2.992V15.038H.667v-4.806zm6.821 14.882h27.751V11.937l-13.797-7.13-13.954 7.13v13.177zm7.442-8.527h12.867v-4.65H14.93v4.65zm0 6.67h12.867v-4.653H14.93v4.653z" fill="#6F7672" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        </div>
        {/* Social Media and Legal Section */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 justify-start mb-8">
            <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook "><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram "><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          {/* Legal Text */}
          <div className="text-xs text-gray-500 space-y-4">
            <p>
              &copy; 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies.
              Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License
              #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services
              provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
            </p>
            <p>
              Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender.
              NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007.
              Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states.
              <a href="#" className="text-green-600"> NMLS Consumer Access</a>.
            </p>
            <p>
              Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the
              State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate
              brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here
              is a full listing of Better Real Estate, LLC’s <a href="#" className="text-green-600">license numbers</a>. Better Real Estate, LLC provides access to real estate
              brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”).
              Equal Housing Opportunity. All rights reserved.
            </p>

            {/* Additional Links */}
            <p>
              <a href="#" className="text-green-600">New York State Housing and Anti-Discrimination Notice</a><br />
              <a href="#" className="text-green-600">New York Standard Operating Procedures</a>
            </p>
            <p>
              Texas Real Estate Commission: <a href="#" className="text-green-600">Information About Brokerage Services</a> | 
              <a href="#" className="text-green-600">Consumer Protection Notice</a>
            </p>
            <p>
              Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
            </p>
            <p>
              Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593.
              325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            </p>
            <p>
              Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593.
              Here is a full listing of Better Cover, LLC’s <a href="#" className="text-green-600">license numbers</a>.
            </p>
            <p>
              Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
            </p>
            <p>
              Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, LLC
              dba Better Attorney Match, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company.
              Each company is a separate legal entity operated and managed through its own management and governance structure as required
              by its state of incorporation, and applicable legal and regulatory requirements. Products not available in all states.
            </p>
            <p>
              Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names,
              logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company
              trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S.
              Patent and Trademark Office and is owned by Better Cover, LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
