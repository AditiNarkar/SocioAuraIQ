'use client'

import React from "react";
import { Chart } from "react-google-charts";

export default function EngagementInsights() {
    const engagementBreakdownData = [
        ["Type", "Engagement"],
        ["Likes", 500],
        ["Comments", 150],
        ["Shares", 100],
    ];

    const engagementTrendData = [
        ["Date", "Engagement Rate (%)"],
        ["2025-01-01", 2.5],
        ["2025-01-02", 3.0],
        ["2025-01-03", 3.5],
        ["2025-01-04", 4.0],
        ["2025-01-05", 4.5],
    ];

    const heatmapData = [
        ["Day", "Hour", "Engagement"],
        ["Monday", "10 AM", 20],
        ["Monday", "12 PM", 35],
        ["Tuesday", "10 AM", 50],
        ["Tuesday", "12 PM", 70],
        ["Wednesday", "10 AM", 40],
        ["Wednesday", "12 PM", 60],
    ];

    const tableData = [
        ["Post", "Engagement Rate (%)", "Likes", "Comments", "Shares"],
        ["Post 1", "5%", 100, 20, 10],
        ["Post 2", "3%", 50, 10, 5],
        ["Post 3", "7%", 120, 25, 15],
    ];

    const chartOptions = {
        pie: {
            title: "Engagement Breakdown",
            backgroundColor: "transparent",
            legend: { textStyle: { color: "#ffffff" } },
            titleTextStyle: { color: "#ffffff" },
        },
        line: {
            title: "Engagement Rate Trend",
            backgroundColor: "transparent",
            hAxis: { textStyle: { color: "#ffffff" }, titleTextStyle: { color: "#ffffff" } },
            vAxis: { textStyle: { color: "#ffffff" }, titleTextStyle: { color: "#ffffff" } },
            legend: { textStyle: { color: "#ffffff" } },
            titleTextStyle: { color: "#ffffff" },
        },
    };

    return (
        <div className=" space-y-8">
            {/* Engagement Breakdown */}
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-1 text-white">Engagement Breakdown</h2>
                <div className="h-50">
                    <Chart
                        chartType="PieChart"
                        data={engagementBreakdownData}
                        options={chartOptions.pie}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>

            {/* Top-Performing Posts */}
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-white">Top-Performing Posts</h2>
                <table className="w-full text-white">
                    <thead>
                        <tr className="bg-gray-700 text-sm">
                            <th className="py-2 px-4">Post</th>
                            <th className="py-2 px-4">Engagement Rate (%)</th>
                            <th className="py-2 px-4">Likes</th>
                            <th className="py-2 px-4">Comments</th>
                            <th className="py-2 px-4">Shares</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="text-sm even:bg-gray-700 odd:bg-gray-600">
                                {row.map((cell, i) => (
                                    <td key={i} className="py-2 px-4 text-center">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Engagement Rate Trend */}
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-white">Engagement Rate Trend</h2>
                <div className="h-64">
                    <Chart
                        chartType="LineChart"
                        data={engagementTrendData}
                        options={chartOptions.line}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>

            {/* Time of Engagement Heatmap */}
            {/* Time of Engagement Heatmap */}
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-white">Time of Engagement</h2>
                <div className="h-64">
                    <Chart
                        chartType="Calendar"
                        data={[
                            ["Date", "Engagement"],
                            [new Date(2025, 0, 1), 20],
                            [new Date(2025, 0, 2), 35],
                            [new Date(2025, 0, 3), 50],
                            [new Date(2025, 0, 4), 70],
                            [new Date(2025, 0, 5), 40],
                            [new Date(2025, 0, 6), 60],
                        ]}
                        options={{
                            title: "Engagement Activity by Day",
                            calendar: {
                                cellSize: 15,
                                dayOfWeekLabel: { color: "#ffffff" },
                                monthLabel: { color: "#ffffff" },
                            },
                            colorAxis: { colors: ["#f6c7b6", "#ce502d"] }, // Gradient from light to dark
                        }}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>

        </div>
    );
}
