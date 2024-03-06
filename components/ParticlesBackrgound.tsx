'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
 import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesBackrgound = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0
        // IMPORTANT
    },
    
      fpsLimit: 60,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "false",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab:{
            distance: 100,
            lineLinked:{
              opacity: 1
            }
            },
            repulse:{
            distance: 200,
            duration: 0.4
            },
            push:{
            quantity: 4,
            },
            remove:{
            quantity: 2
            },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
      },
      pauseOnOutsideViewport:true,
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#ad1357",
          distance: 150,
          blink:true,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 3,
            opacity_min: 0.1,
            sync: false
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "/flask.svg",
            width: 100,
            height: 100
          }
        },
          
        size: {
          value: { min: 0.5, max: 3 },
          random: true,
          anim: {
            enable: true,
            speed: 20,
            size_min: 0.1,
            sync: false
          }
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
        <>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute h-[12%] top-0 -z-1 w-full"
        
      />
      {children}
  
      </>
     
    );
  }

  return <></>;
};
export default ParticlesBackrgound