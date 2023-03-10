import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';
import { Sparkline } from '@syncfusion/ej2-react-charts';
 
const Ecommerce = () => {
  return (
    <div className="mt-15">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg lg:h-96 md:h-auto rounded-xl w-full p-8 pt-9 m-3 bg-banner bg-no-repeat bg-cover bg-center"> 
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 place-items-center">
           {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
            <button
              type="button"
              stlye={{ color: item.iconColor, backgroundColor: item.iconBg }}  
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">
                  {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p> 
            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
           ))}
           
        </div>
        <div className="flex gap-10 flex-wrap justify-center mt-10">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounde-2xl md:w-780">
              <div className="flex justify-between">
                <p className="font-semibold text-xl">Revenue Updates</p>
                <div className="items-center gap-4 flex">
                  <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                    <span><GoPrimitiveDot/></span>
                    <span>Expense</span>
                  </p>
                  <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                    <span><GoPrimitiveDot/></span>
                    <span>Budget</span>
                  </p>
                </div>
              </div>
              <div className="mt-10 flex gap-10 flex-wrap justify-center float-left">
                <div className="border-r-1 border-color m-4 pr-10">
                  <div>
                    <p>
                      <span className="text-3xl font-semibold">124412</span>
                      <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">25%</span>
                    </p>
                    <p className="text-gray-500 mt-1">Budget</p>
                  </div>
                  <div className="mt-8">
                    <p>
                      <span className="text-3xl font-semibold">124412</span>
                    </p>
                    <p className="text-gray-500 mt-1">Expense</p>
                  </div>
                  <div className="mt-5">
                    <SparkLine
                      currentColor="blue"
                      id="line-sparkline"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      color="blue"
                    />
                  </div>
                  <div className="mt-10">
                    <Button 
                      color="white"
                      bgColor="blue"
                      text="Download Report"
                      borderRadius="50px"
                      padding="10px"
                    />
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
              <div>
                <Stacked width="320px" height="360px" />
              </div>  
          </div>
        </div>
    </div>
  )
}

export default Ecommerce