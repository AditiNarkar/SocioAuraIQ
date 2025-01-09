export default function Home() {
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-md-8 col-xl-8 chat" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div className="img_cont">
                            <img
                                src="logo1.jpeg"
                                className="rounded-circle user_img"
                            />
                        </div>
                        <div className="main-title" style={{ fontSize: "5rem" }}>
                            AuroraScope: Shedding light on the social horizon...
                        </div>
                        <input type="text" style={{ width: "100%", fontSize: 30, height: 70, marginBottom: 30 }} />
                        <button className="button-64" role="button"><span className="text">Submit</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}
