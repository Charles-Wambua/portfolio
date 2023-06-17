import "./css/footer.css";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="links">
        <div class="social-icons">
          <a
            href="https://wa.me/254114652533"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/thatsme.charles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Charles59676543"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Charles-Wambua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="socialicons">
        <p>Copyright © Charles Wambua 2023</p>
      </div>
    </div>
  );
};
