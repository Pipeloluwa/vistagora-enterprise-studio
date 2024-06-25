import { Variants } from 'framer-motion';

export const cardVariantsLeft: Variants = {

    offscreen: {
        x: -200,
        visibility: "hidden"
      },
    onscreen: {
    x: 0,
    visibility: "visible",
    
    transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3
    }
    }
  };



  export const cardVariantsRight: Variants = {

    offscreen: {
        
        x:200,
        visibility: "hidden"
      },
    onscreen: {
    
    x: 0,
    visibility: "visible",
    
    transition: {
        type: "spring",
        bounce: 0.5,
        duration: 3
    }
    }
  };





  export const cardVariantsBottom: Variants = {
    offscreen: {
      y: 100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 3
        }
    }
  };


  export const cardVariantsUp: Variants = {
    offscreen: {
      y: -100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 3
        }
    }
  };



  export const cardVariantsUp2: Variants = {
    offscreen: {
      y: -100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 5
        }
    }
  };



  export const cardVariantsUp3: Variants = {
    offscreen: {
      y: -100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 7
        }
    }
  };


  export const cardVariantsUp4: Variants = {
    offscreen: {
      y: 100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 8
        }
    }
  };


  export const cardVariantsUp5: Variants = {
    offscreen: {
      y: 100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 9
        }
    }
  };

  export const cardVariantsUp6: Variants = {
    offscreen: {
      y: 100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 10
        }
    }
  };

  export const cardVariantsUp7: Variants = {
    offscreen: {
      y: 100,
      size: 0,
      opacity: 0
    },
    onscreen: {
        y: 0,
        size: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 10
        }
    }
  };

