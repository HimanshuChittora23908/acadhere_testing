import React from 'react';
import Faq from 'react-faq-component';
import "./FAQ.css";

const data = {
  title: "FAQs (Frequently Asked Questions)",
  rows: [
    {
      title: "Who do I call if I receive an error message while using the application?",
      content: "First try to reload the application again, if still the error is there then you can contact any one among the five: Akash Tureha, Ankur Agarwal, Himanshu Chittora, Raghav D Turki, Siddhant Jha"
    },
    {
      title: "How to use this application?",
      content: "Link your google classroom with AcadHere and then you can access all the things like class information, assignments, important notices etc. on this platform only."
    },
    {
      title: "Can I change the theme in the application?",
      content: "Will be available in future updates."
    },
    {
      title: "Can I manage my notifications?",
      content: "Will be available in future updates."
    },
    {
      title: "What if the classroom is not loading classes inside the application?",
      content: "Go to Settings->privacy and security->clear browsing data (for Google Chrome, Microsoft Edge, Mozilla Firefox) or Setting->More Tools->Clear Browsing Data (for Brave), after this reload the application and try again."
    },
    {
      title: "Any Future Updates ?",
      content: "Releasing Time Table for Section IIIT Kota in few days."
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