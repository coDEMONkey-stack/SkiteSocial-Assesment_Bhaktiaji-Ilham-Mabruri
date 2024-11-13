import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Dashboard: React.FC = () => {
    const chartOptions: ApexOptions  = {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['11/05', '12/05', '13/05', '14/05', '15/05', '16/05', '17/05'],
        },
        colors: ['#B2C5D4', '#B2C5D4', '#B2C5D4', '#B2C5D4', '#3E7DAB', '#B2C5D4', '#B2C5D4'],
    };

    const series = [
        {
          name: 'Items Sold',
          data: [5, 7, 4, 6, 8, 5, 6],
        },
    ];

  return (
    <div className="flex flex-col space-y-4">
         {/* Product Sold Section */}
      <div className="bg-white p-4 rounded-lg sm:mb-12 mb-5 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Product Sold</h2>
          <select className="border rounded p-1 text-sm">
            <option>This week</option>
            <option>Last week</option>
          </select>
        </div>
        <Chart options={chartOptions} series={series} type="bar" height={350} />
      </div>

      {/* Top Selling Product Section */}
      <div className="bg-white p-4 rounded-lg w-1/2 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Top selling product</h2>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>This week</option>
            <option>Last week</option>
          </select>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-gray-500 pb-2">Name</th>
              <th className="text-gray-500 pb-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="py-3">Item A</td>
              <td className="py-3">$120.00</td>
            </tr>
            <tr className="bg-gray-100 border-t border-gray-200">
              <td className="py-3">Item B</td>
              <td className="py-3">$80.00</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3">Item C</td>
              <td className="py-3">$76.00</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
