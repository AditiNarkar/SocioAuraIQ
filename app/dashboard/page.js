"use client"

import React, { useState } from "react";
import { Chart } from "react-google-charts";

export default function Overview() {
    const [selectedFilter, setSelectedFilter] = useState("Last 7 days");
    const chartData = [
        ["Date", "Followers", "Impressions"],
        ["2025-01-01", 400, 1000],
        ["2025-01-02", 460, 1200],
        ["2025-01-03", 500, 1500],
        ["2025-01-04", 580, 2000],
        ["2025-01-05", 650, 2300],
    ];

    const chartOptions = {
        title: "Overall Trends",
        hAxis: { title: "Date", textStyle: { color: "#ffffff" }, titleTextStyle: { color: "#ffffff" } },
        vAxis: { title: "Metrics", textStyle: { color: "#ffffff" }, titleTextStyle: { color: "#ffffff" } },
        backgroundColor: "transparent",
        chartArea: { width: "80%", height: "70%" },
        legend: { textStyle: { color: "#ffffff" } },
        titleTextStyle: { color: "#ffffff" },
    };

    return (
        <div className="p-6">
            {/* Filters Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white">Overview</h1>
                <div className="flex space-x-4">
                    {["Last 7 days", "Last 30 days", "Custom"].map((filter) => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-lg border ${selectedFilter === filter
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-gray-300"
                                }`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Key Metrics Display */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {[
                    { label: "Total Followers", value: "12,345" },
                    { label: "Total Posts", value: "456" },
                    { label: "Engagement Rate", value: "15.4%" },
                    { label: "Impressions", value: "89,123" },
                    { label: "Reach", value: "76,543" },
                ].map((metric) => (
                    <div
                        key={metric.label}
                        className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg text-center"
                    >
                        <h3 className="text-sm font-medium text-gray-300">{metric.label}</h3>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                    </div>
                ))}
            </div>

            {/* Graphical Summary */}
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-white">Overall Trends</h2>
                <div className="h-64">
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="100%"
                        data={chartData}
                        options={chartOptions}
                    />
                </div>
            </div>
        </div>
    );
}
