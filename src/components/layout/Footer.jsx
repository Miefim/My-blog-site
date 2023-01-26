function Footer({className, ...props}) {
   return (
      <section className={["footer", className].join(' ')}>
      <div className="footer-social-network-line">
         <a className="footer-social-network-line-unit-link" href="https://vk.com/id25625625" target='_blank'>
            <div className="footer-social-network-line-unit">
               <img
                  className="footer-social-network-line-unit-image"
                  src="/images/vk-logo-black.png"
                  alt=""
               />
               VK
            </div>
         </a>
         <a className="footer-social-network-line-unit-link" href="https://spb.hh.ru/resume/61fd0c6eff0ba50b2a0039ed1f506444714b46" target='_blank'>
            <div className="footer-social-network-line-unit">
               <img
                  className="footer-social-network-line-unit-image"
                  src="/images/hh-logo-black.png"
                  alt=""
               />
               HeadHunter
            </div>
         </a>
         <a className="footer-social-network-line-unit-link" href="https://github.com/Miefim" target='_blank'>
            <div className="footer-social-network-line-unit">
               <img
                  className="footer-social-network-line-unit-image"
                  src="/images/githubIcon.png"
                  alt=""
               />
               GitHub
            </div>
         </a>
         <a className="footer-social-network-line-unit-link" href="https://www.linkedin.com/in/mikhail-efimov-b03801258/?locale=en_US" target='_blank'>
            <div className="footer-social-network-line-unit">
               <img
                  className="footer-social-network-line-unit-image"
                  src="/images/linkedin-logo-black.png"
                  alt=""
               />
               Linkedin
            </div> 
         </a>
      </div>
      <div className="rights">© 2022 Mikhail Efimov.</div>
   </section>
   )}

   export default Footer