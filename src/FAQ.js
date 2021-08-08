import React from 'react';
import Faq from 'react-faq-component';
import "./FAQ.css";

const data = {
  title: "FAQs (Frequently Asked Questions)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}

export default function FAQ() {
    return (
        <>
      <div className="bg_faq">
        <Faq 
        data={data}
        styles={{
            titleTextSize: '3vw',
            rowTitleTextSize: '1.3vw',
            rowContentTextSize: '1vw',
            titleTextColor: "black",
            rowTitleColor: "purple",
            rowContentColor: "black",
            bgColor: "transparent",
        }}
        />
      </div>

        <div className="bg_faq_mobile">
        <Faq 
        data={data}
        styles={{
            titleTextSize: '6vw',
            rowTitleTextSize: '2.6vw',
            rowContentTextSize: '2vw',
            titleTextColor: "black",
            rowTitleColor: "purple",
            rowContentColor: "black",
            bgColor: "transparent",
        }}
        />
        </div>
        </>
    )
}