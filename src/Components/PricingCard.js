import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CiDiscount1 } from "react-icons/ci";

const PricingCard = ({ card }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 flex flex-col relative h-[800px] ${card.popular ? 'bg-[#003366] border border-blue-600 rounded-lg text-white' : 'bg-white border border-gray-200 rounded-lg'}`}>
      
      {/* Popular tag Code for Blue Card */}
      {card.popular && (
        <div className="absolute top-6 right-4 bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
          Popular
        </div>
      )}

      {/* Plan name and Price Code for All Cards*/}
      <h2 className={`text-xl mb-2 ${card.popular ? 'text-white font-normal' : 'text-gray-900 font-medium'}`}>
        {card.name}
      </h2>
      {card.name === 'Trial' || card.name === 'Enterprise' ? (
        <>
          <div className="text-5xl font-bold mb-1">{card.price}</div>
          <p className={`text-lg mb-2 font-normal ${card.popular ? 'text-blue-200' : 'text-gray-400'}`}>
            {card.description}
          </p>
        </>
      ) : (
        <div className="text-5xl font-bold mb-1">
          {card.price}
          <span className={`text-lg ml-2 font-normal ${card.popular ? 'text-blue-200' : 'text-gray-400'}`}>
            {card.description}
          </span>
        </div>
      )}

      {/* Discount and Original Price Code for All Cards */}
      <div className="flex items-center mb-4">
        {card.discount && (
          <span className="text-sm font-semibold px-2 py-1 rounded-full mr-2 bg-green-100 text-green-800">
            <CiDiscount1 className="inline-block w-5 h-5 mr-1" />
            {card.discount}
          </span>
        )}
        {card.originalPrice && (
          <p className={`${card.popular ? 'line-through text-blue-100 font-bold text-xl' : 'line-through text-gray-600 font-bold text-xl'}`}>
            {card.originalPrice}
          </p>
        )}
      </div>

      {/* Credits Code for Two Cards */}
      {card.credits && (
        <div className={`text-lg font-semibold mb-4 flex items-center ${card.popular ? 'text-white' : 'text-blue-600'}`}>
          <span className={`flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full mr-3 ${card.popular ? 'bg-white' : 'bg-blue-600'}`}>
            <FontAwesomeIcon icon={faCheck} className={`w-2 h-2 ${card.popular ? 'text-blue-600' : 'text-white'}`} />
          </span>
          <span>{card.credits}</span>
        </div>
      )}

      {/* Features list Code for All Cards*/}
      <ul className="mb-4 flex-grow">
        {card.features.map((feature, fIndex) => (
          <li key={fIndex} className="flex items-start mb-2 text-md">
            <span className={`flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full mr-3 self-center ${card.popular ? 'bg-white' : 'bg-gray-700'}`}>
              <FontAwesomeIcon icon={faCheck} className={`w-2 h-2 ${card.popular ? 'text-blue-600 text-md font-medium' : 'text-white text-md font-medium'}`} />
            </span>
            <span className={`flex-grow leading-normal ${card.popular ? 'text-white text-[1rem] font-[450]' : 'text-gray-500 text-[1rem] font-[450]'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer items Code for All Cards*/}
      <div className={`mt-auto pt-4 border-t ${card.popular ? 'border-white' : 'border-blue-400'}`}>
        <div className="h-28">
          {card.footerItems.map((item, iIndex) => (
            <div key={iIndex} className={`text-md font-medium mb-3 flex items-start ${card.popular ? 'text-blue-100' : 'text-gray-500'}`}>
              <span className="mr-2">•</span>
              <span className="flex-grow">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Button Code for All Cards*/}
      <button className={`w-full py-2 px-4 rounded-md mt-4 font-medium ${card.popular ? 'bg-white text-gray-600' : 'bg-blue-600 text-white'}`}>
        {card.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
