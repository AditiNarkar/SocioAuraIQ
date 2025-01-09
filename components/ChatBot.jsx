export default function ChatBot() {
    return (
        <>
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-md-8 col-xl-8 chat">
                        <div className="main-title">
                            AuroraScope: Shedding light on the social horizon...
                        </div>
                        <div className="card">
                            <div className="card-header msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont" style={{ width: 100 }}>
                                        <img
                                            src="logo1.jpeg"
                                            className="rounded-circle user_img"

                                        />
                                        <span className="online_icon"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>SocioAuraBot</span>
                                        <p>Get to know about your social aura!</p>
                                    </div>
                                </div>
                            </div>
                            <div id="messageFormeight" className="card-body msg_card_body"></div>
                            <div className="card-footer">
                                <form id="messageArea" className="input-group">
                                    <input
                                        type="text"
                                        id="text"
                                        name="msg"
                                        placeholder="Type your message..."
                                        autoComplete="off"
                                        className="form-control type_msg"
                                        required
                                    />
                                    <div className="input-group-append">
                                        <button
                                            type="submit"
                                            id="send"
                                            className="input-group-text send_btn"
                                        >
                                            <i className="fas fa-location-arrow"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}