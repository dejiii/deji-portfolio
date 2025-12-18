"use client";

const year = new Date().getFullYear();

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="d-flex">
        <div className="left-section">
          <img src="/logo.svg" alt="" className="logo" />
        </div>
        <div className="right-section">
          <p className="footer-links-header mb-3">Links</p>
          <div className="small-text">
            <a
              href="https://www.linkedin.com/in/adeyiga/"
              targer="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          {/* <div className="mt-1 small-text">
            <a
              href="https://www.instagram.com/1st.deji/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div> */}
          {/* <div className="mt-1 small-text">
            <a
              href="https://www.twitter.com/1stdeji/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div> */}
          <div className="mt-1 small-text">
            <a
              href="https://docs.google.com/document/d/1f1fRb1186Mzt18YrgxNoe9byFk3aL9iohZ91wlZGlJk/edit?tab=t.0"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-5 " />
      <div className="flex flex-row justify-between">
        <div className="about-text mt-2">Designed and Developed by me</div>
        <div className="footer-text"> &#169; Copyright Dejiii {year}</div>
      </div>
    </section>
  );
};
