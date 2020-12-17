import FadeInDiv from "./components/FadeInDiv";

export default function Home() {
  return (
    <>
      <div
        className="flex p-4 justify-end"
        style={{ backgroundColor: "#222831" }}
      >
        <div style={{ color: "#c1a57b" }} className="m-5">
          header
        </div>

        <div style={{ color: "#c1a57b" }} className="m-5">
          header
        </div>
      </div>
      <div
        style={{ backgroundColor: "#222831" }}
        className=" h-screen justify-center flex items-center"
      >
        <div className="">
          <FadeInDiv text="Hey There, I am" fontSize={23} />
          <FadeInDiv
            text="Yajat Vishwakarma"
            fontSize={50}
            bold
            color="#c1a57b"
            animationDelay={1}
          />
        </div>
      </div>
    </>
  );
}
