
function Icons() {
   return (
      <div className="social-icons">
         <a className="social-icons__link likedin-link" title="LinkedIn" href="https://www.linkedin.com/in/rahul-deka" target="_blank" rel="noopener">
            <div className="social-icons__icon linkedin-icon" style={{ backgroundImage: "url('/assets/linkedin.svg')" }}></div>
         </a>
         <a className="social-icons__link email-link" title="Email" href="mailto:rahuldeka072@gmail.com" target="_blank" rel="noopener">
            <div className="social-icons__icon email-icon" style={{ backgroundImage: "url('/assets/email.svg')" }}></div>
         </a>
         <a className="social-icons__link github-link" title="GitHub" href="https://github.com/iamRahul21" target="_blank" rel="noopener">
            <div className="social-icons__icon github-icon" style={{ backgroundImage: "url('/assets/github.svg')" }}></div>
         </a>
         <a className="social-icons__link instagram-link" title="Instagram" href="https://www.instagram.com/rahuldeka0_0/" target="_blank" rel="noopener">
            <div className="social-icons__icon instagram-icon" style={{ backgroundImage: "url('/assets/instagram.svg')" }}></div>
         </a>
      </div>
   );
}

export default Icons
