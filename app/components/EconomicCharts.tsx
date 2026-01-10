"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { IndicatorData } from "../page";

interface EconomicChartsProps {
  gdp: IndicatorData[];
  inflation: IndicatorData[];
  unemployment: IndicatorData[];
}

export function EconomicCharts({
  gdp,
  inflation,
  unemployment,
}: EconomicChartsProps) {
  const gdpRef = useRef<HTMLDivElement>(null);
  const inflationRef = useRef<HTMLDivElement>(null);
  const unemploymentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Helper function to create a line chart
    const createChart = (
      container: HTMLDivElement,
      data: IndicatorData[],
      title: string,
      yAxisLabel: string,
      formatValue: (value: number) => string
    ) => {
      // Clear previous content
      d3.select(container).selectAll("*").remove();

      if (!data || data.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-sm">No data available for ${title}</p>`;
        return;
      }

      // Filter out null/undefined values and sort by date
      const validData = data
        .filter((d) => d.value != null && d.date != null)
        .sort((a, b) => parseInt(a.date) - parseInt(b.date));

      if (validData.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-sm">No valid data available for ${title}</p>`;
        return;
      }

      const margin = { top: 20, right: 30, bottom: 50, left: 60 };
      const width = 600 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const svg = d3
        .select(container)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Parse dates and values
      const parsedData = validData.map((d) => ({
        date: parseInt(d.date),
        value: d.value as number,
      }));

      // Set up scales
      const xScale = d3
        .scaleLinear()
        .domain(d3.extent(parsedData, (d) => d.date) as [number, number])
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(parsedData, (d) => d.value) as number])
        .nice()
        .range([height, 0]);

      // Create line generator
      const line = d3
        .line<{ date: number; value: number }>()
        .x((d) => xScale(d.date))
        .y((d) => yScale(d.value))
        .curve(d3.curveMonotoneX);

      // Add x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(
          d3
            .axisBottom(xScale)
            .tickFormat((d) => d.toString())
            .ticks(10)
        )
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

      // Add y-axis
      svg
        .append("g")
        .call(
          d3
            .axisLeft(yScale)
            .tickFormat((d) => formatValue(d as number))
        );

      // Add grid lines
      svg
        .append("g")
        .attr("class", "grid")
        .attr("transform", `translate(0,${height})`)
        .call(
          d3
            .axisBottom(xScale)
            .tickSize(-height)
            .tickFormat(() => "")
        )
        .selectAll("line")
        .attr("stroke", "#e5e7eb")
        .attr("stroke-dasharray", "3,3");

      svg
        .append("g")
        .attr("class", "grid")
        .call(
          d3
            .axisLeft(yScale)
            .tickSize(-width)
            .tickFormat(() => "")
        )
        .selectAll("line")
        .attr("stroke", "#e5e7eb")
        .attr("stroke-dasharray", "3,3");

      // Add the line
      svg
        .append("path")
        .datum(parsedData)
        .attr("fill", "none")
        .attr("stroke", "#3b82f6")
        .attr("stroke-width", 2)
        .attr("d", line);

      // Add dots
      svg
        .selectAll(".dot")
        .data(parsedData)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("cx", (d) => xScale(d.date))
        .attr("cy", (d) => yScale(d.value))
        .attr("r", 4)
        .attr("fill", "#3b82f6");

      // Add axis labels
      svg
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - height / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("fill", "#6b7280")
        .style("font-size", "12px")
        .text(yAxisLabel);

      svg
        .append("text")
        .attr(
          "transform",
          `translate(${width / 2}, ${height + margin.bottom - 10})`
        )
        .style("text-anchor", "middle")
        .style("fill", "#6b7280")
        .style("font-size", "12px")
        .text("Year");

      // Add title
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", 0 - margin.top / 2)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("font-weight", "600")
        .style("fill", "#111827")
        .text(title);
    };

    // Create charts if data exists
    if (gdpRef.current && gdp.length > 0) {
      createChart(
        gdpRef.current,
        gdp,
        "GDP Over Time",
        "GDP (USD)",
        (value) => `$${(value / 1e9).toFixed(1)}B`
      );
    }

    if (inflationRef.current && inflation.length > 0) {
      createChart(
        inflationRef.current,
        inflation,
        "Inflation Rate Over Time",
        "Inflation (%)",
        (value) => `${value.toFixed(1)}%`
      );
    }

    if (unemploymentRef.current && unemployment.length > 0) {
      createChart(
        unemploymentRef.current,
        unemployment,
        "Unemployment Rate Over Time",
        "Unemployment (%)",
        (value) => `${value.toFixed(1)}%`
      );
    }
  }, [gdp, inflation, unemployment]);

  return (
    <div className="mt-8 space-y-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Economic Trends (10 Years)
      </h2>
      <div className="space-y-8">
        {gdp.length > 0 && (
          <div>
            <div ref={gdpRef} className="w-full"></div>
          </div>
        )}
        {inflation.length > 0 && (
          <div>
            <div ref={inflationRef} className="w-full"></div>
          </div>
        )}
        {unemployment.length > 0 && (
          <div>
            <div ref={unemploymentRef} className="w-full"></div>
          </div>
        )}
        {gdp.length === 0 &&
          inflation.length === 0 &&
          unemployment.length === 0 && (
            <p className="text-gray-500 text-sm">
              No economic data available for the past 10 years.
            </p>
          )}
      </div>
    </div>
  );
}
