import Link from "next/link";

export default function Home() {
    return (
        <div className="container-fluid h-100">
            {/* Video background */}
            <video
                autoPlay
                loop
                muted
                className="video-background"
            >
                <source src="waves1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>

            <div className="row justify-content-center h-100 !z-10" style={{ position: "relative" }}>
                <div className="col-md-8 col-xl-8 chat" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                        src="logo1.jpeg"
                        className="rounded-circle user_img !w-[150px] !h-[150px] animate-moveInCircle"
                    />
                    <div className="main-title" style={{ fontSize: "3.5rem" }}>
                        AuroraScope: Shedding light on the social horizon...
                    </div>
                    {/* <input type="text" style={{ padding: 5 , width: "100%", fontSize: 20, height: 50, marginBottom: 30 }} placeholder="Enter a link to reveal its social aura..." /> */}
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile01" style={{ padding: 5, width: "100%", fontSize: 20, height: 50, marginBottom: 30 }} placeholder="Enter a link to reveal its social aura..." />
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                        <Link href="/dashboard" passHref>
                            <button className="button-64" role="button">
                                <span className="text">Submit</span>
                            </button>
                        </Link>
                        <Link href="/chatbot" passHref>
                            <button className="button-64" role="button"><span className="text">SocioAuraBot</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
