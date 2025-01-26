import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiBluesky } from 'react-icons/si';
import '../styles/Landing.css';
import erlflaskSmoke from '../assets/erlflask-smoke.png';

function Landing() {
  const h1Ref = useRef(null);
  const imageRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    gsap.set([h1Ref.current, imageRef.current, socialsRef.current], {
      opacity: 0,
      y: 50
    });

    const tl = gsap.timeline();

    tl.to(h1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(imageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(socialsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");
  }, []);

  return (
    <div className="landing-section">
      <h1 ref={h1Ref}>Josh Ford</h1>
      <img 
        ref={imageRef}
        src={erlflaskSmoke} 
        alt="Artistic glass work by Josh Ford" 
        className="landing-image"
      />
      <div ref={socialsRef} className="social-links">
        <a href="https://instagram.com/thisisjoshford" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/thisisjoshford" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://bsky.app/profile/thisisjoshford.bsky.social" target="_blank" rel="noopener noreferrer">
          <SiBluesky />
        </a>
        <a href="mailto:thisisjoshford@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Landing; 