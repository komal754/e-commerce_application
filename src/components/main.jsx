    // import React, { useState, useEffect } from "react";
    // import "./Navbar.css"; // Import your CSS file (assuming it contains necessary styles)

    // const Home = () => {
    //   const [slideIndex, setSlideIndex] = useState(1);

    //   function plusSlides(n) {
    //     setSlideIndex(slideIndex + n);
    //   }

    //   function currentSlide(n) {
    //     setSlideIndex(n);
    //   }

    //   useEffect(() => {
    //     showSlides(slideIndex);
    //   }, [slideIndex]);

    //   function showSlides(n) {
    //     const slides = document.querySelectorAll(".mySlides");
    //     const dots = document.querySelectorAll(".dot");

    //     if (!slides.length || !dots.length) {
    //       // Ensure elements are available before manipulating them
    //       return;
    //     }

    //     if (n > slides.length) {
    //       setSlideIndex(1);
    //     }
    //     if (n < 1) {
    //       setSlideIndex(slides.length);
    //     }

    //     slides.forEach((slide) => {
    //       slide.style.display = "none";
    //     });

    //     dots.forEach((dot) => {
    //       dot.classList.remove("active");
    //     });

    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].classList.add("active");
    //   }

    //   // Automatically advance the slide every 3 seconds
    //   useEffect(() => {
    //     const slideInterval = setInterval(() => {
    //       plusSlides(1);
    //     }, 3000);

    //     return () => clearInterval(slideInterval);
    //   }, []); // Empty dependency array to run this effect only once

    //   return (
    //     <div className="hero border-1 pb-3">
    //       <div className="card bg-dark text-white border-0 mx-3">
    //         <div className="slideshow-container">
    //           <div className="mySlides fade">
    //             <div className="numbertext">1 / 3</div>
    //             <img
    //               src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
    //               style={{ width: '100%' }}
    //               alt="Image 1"
    //             />
    //             <div className="text">Caption Text</div>
    //           </div>
    //           <div className="mySlides fade">
    //             <div className="numbertext">2 / 3</div>
    //             <img
    //               src="https://5.imimg.com/data5/SELLER/Default/2022/6/QK/RR/UH/28667155/engineering-uniform-500x500.jpg"
    //               style={{ width: '100%' }}
    //               alt="Image 2"
    //             />
    //             <div className="text">Caption Two</div>
    //           </div>
    //           <div className="mySlides fade">
    //             <div className="numbertext">3 / 3</div>
    //             <img
    //               src="https://img.freepik.com/premium-photo/young-indian-engineer-uniform-using-laptop-white-background_75648-6577.jpg?w=360"
    //               style={{ width: '100%' }}
    //               alt="Image 3"
    //             />
    //             <div className="text">Caption Three</div>
    //           </div>
    //           <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
    //           <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    //         </div>
    //         <div style={{ textAlign: 'center' }}>
    //           <span className="dot" onClick={() => currentSlide(1)}></span>
    //           <span className="dot" onClick={() => currentSlide(2)}></span>
    //           <span className="dot" onClick={() => currentSlide(3)}></span>
    //         </div>
    //       </div>
    //       <div className="card-img-overlay d-flex align-items-center">
    //         <div className="container">
    //           <h5 className="card-title1 fs-1 text fw-lighter">New Season Arrivals</h5>
    //           <p className="card-text1 fs-5 d-none d-sm-block">
    //             This is a wider card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    // export default Home;
    import React, { useState } from "react";
    import SimpleImageSlider from "react-simple-image-slider";
    import './Navbar.css';
    export default function App() {
      const [imageNum, setImageNum] = useState(1);
      const sliderImages = [
      
          {
            url: "https://wallpaperaccess.com/full/1209411.jpg",
            caption:"BOOKS",
          },
          {
            url: "https://img.freepik.com/free-photo/architecture-concept-with-blank-page-clipboard_23-2147813103.jpg?t=st=1694374352~exp=1694374952~hmac=9b4fd69041421a4abcd2cee249223c9450e439e706910d6178174d60d6e0a9b2",
            caption:"ENGINEERING ACCESSORIES",
            },
          {
            url: "https://img.freepik.com/free-photo/close-up-still-life-hard-exams_23-2149314038.jpg?w=826&t=st=1694374644~exp=1694375244~hmac=5a829b1c9ead05257c74a9ef4f23ba7d043a20a2cc9b2b2ffe5f1ffeb6737ba5",
            caption:"R.T.U. PAPERS",
            },
          {
            url: "https://img.freepik.com/free-photo/front-view-male-doctor-protective-suit-with-mask-just-sitting-with-smile-white-space_140725-84391.jpg?w=826&t=st=1694374696~exp=1694375296~hmac=d20da11a208f5cb93e1806f5a1851f7fb76c57af5dfb4c73ec2eb2186d92c955",
            caption:"UNIFORMS",
            },
        
      ];
      return (
          <div>
          
            <SimpleImageSlider
                width={1250}
                height={480}
                images={sliderImages}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                // onClickBullets={} 
                onStartSlide = {(index, length) => {
                  setImageNum(index);
                  
                }}
                  autoPlayDelay = {2.5}
                  
            />
          
            <div className="caption-container">
      <p className="caption-text">
        {sliderImages[imageNum - 1]?.caption}
      </p>
    </div>
            <div className="card-img-overlay d-flex align-items-center">
              <h5 className="card-title1 fs-1 text fw-lighter">New Season Arrivals</h5>
            <div className="container">
              {/* <p className="card-text1 fs-5 d-none d-sm-block">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
            </div>
          </div>
          </div>
      );
    }