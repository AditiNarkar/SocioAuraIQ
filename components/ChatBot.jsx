"use client"
import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        {
            text: "Hi! I'm Aurora, your social insights companion. How can I help you today?",
            isUser: false
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const messageListRef = useRef(null);

    const scrollToBottom = () => {
        if (messageListRef.current) {
            const scrollHeight = messageListRef.current.scrollHeight;
            const height = messageListRef.current.clientHeight;
            const maxScrollTop = scrollHeight - height;
            messageListRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const callAPI = async (userMessage) => {
        // console.log("APi", userMessage)
        try {
            const response = await fetch('https://socioauraproxy.onrender.com/api/v1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    input: userMessage
                })
            });
            console.log(response)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'API request failed');
            }

            const data = await response.json();
            console.log("Data", data)

            let messageText;
            if (data.output && typeof data.output === 'string') {
                messageText = data.output;
            } else if (typeof data === 'string') {
                messageText = data;
            } else {
                messageText = "Received an unexpected response format";
            }

            setError(null);
            return { output: messageText };
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
            return {
                output: "I'm having trouble connecting right now. Please try again in a moment."
            };
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = inputMessage.trim();
        console.log(userMessage)
        setInputMessage('');
        setError(null);

        // Add user message
        setMessages(prev => [...prev, {
            text: userMessage,
            isUser: true
        }]);

        setIsLoading(true);

        try {
            // Get bot response
            const response = await callAPI(userMessage);

            // Add bot response
            setMessages(prev => [...prev, {
                text: response.output || "I couldn't process that properly. Could you try rephrasing?",
                isUser: false
            }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                text: "I'm experiencing technical difficulties. Please try again later.",
                isUser: false,
                isError: true
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-md-4 col-xl-8 chat !m-5">
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
                            <div
                                id="messageFormeight"
                                className="card-body msg_card_body"
                                ref={messageListRef}
                            >
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-2`}
                                    >
                                        <div
                                            className={`message ${message.isUser ? ' bg-chatBlue bg-opacity-50 border-neonBlue shadow-neonBlue' : 'bg-chatGreen bg-opacity-50 border-neonGreen shadow-neonGreen'} text-white px-2 pt-2  rounded-lg max-w-md break-words`}
                                        >
                                            <p className="text-sm leading-normal">{message.text}</p>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="message bot-msg text-white">

                                        <div className="flex items-end space-x-2">
                                            {/* Logo Container */}
                                            <div
                                                className="img_cont relative"
                                                style={{ width: '50px', height: '50px' }}
                                            >
                                                <img
                                                    src="logo1.jpeg"
                                                    alt="Logo"
                                                    className="rounded-full object-cover w-full h-full"
                                                />
                                                <span
                                                    className="online_icon absolute  bg-green-500 rounded-full"
                                                    style={{
                                                        width: '10px',
                                                        height: '10px',
                                                        bottom: '0px', // Positioned at the bottom of the container
                                                    }}
                                                ></span>
                                            </div>

                                            {/* Thinking Text and Dots */}
                                            <div className="flex items-baseline  -mb-5" >
                                                <p className="text-white text-sm font-medium flex items-baseline ml-3 ">
                                                    is thinking
                                                    <span className="ml-1" style={{ position: 'relative', top: '2px' }}>🤔</span>
                                                </p>
                                                <div className="flex items-baseline space-x-1 ml-2">
                                                    <span className="animate-pulse w-1.5 h-1.5 bg-white rounded-full"></span>
                                                    <span className="animate-pulse w-1.5 h-1.5 bg-white rounded-full delay-200"></span>
                                                    <span className="animate-pulse w-1.5 h-1.5 bg-white rounded-full delay-400"></span>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                )}
                                {error && (
                                    <div className="message bot-msg text-white">
                                        <p>{error}</p>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                            <div className="card-footer">
                                <form id="messageArea" className="input-group" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        id="text"
                                        name="msg"
                                        placeholder="Type your message..."
                                        autoComplete="off"
                                        className="form-control type_msg"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
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
    );
}

export default ChatBot;
