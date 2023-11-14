import img1 from "../assets/saint11.jpg";

const About1 = () => {
  return (
    <div className="w-full h-full flex md:flex-col items-center gap-[25px] mt-[5rem]">
      <div className="flex1  flex  justify-center">
        <img src={img1} alt="" className= "w-[600px] md:w-[500px]  object-cover" />
      </div>
      <div className="flex-1 md:w-[370px] flex gap-5">
        <div>
          <h1 className="font-monument uppercase md:text-[10px] tracking-[5px]">Intro</h1>
        </div>
        <div className="flex flex-col md:gap-10 gap-20">
          <div>
            <p className="font-futura  text-[14px] leading-[1.6] tracking-wider">
              SAINT MORIARTYY is a ready-to-wear label founded in 2018 in a
              small dorm room by two friends eager to create something
              different. Bruno and Alex were raised in completely different
              environments. One from Bali, the other from Burgos (a little more
              north) had an instant connection that, after a month of knowing
              each other, led them to create a joint movement that would change
              their lives forever. 
            </p>
            <p>
            &quot;For us, it was all about the hip-hop scene,
              the rawness of skateboarding and the artist’s creativity which
              motivated us to imprint a way of living shared through the
              internet.&quot;
            </p>
          </div>
          <div>
            <h1 className="font-futura  text-[20px] tracking-wide">&quot;For the free generation&quot;</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
