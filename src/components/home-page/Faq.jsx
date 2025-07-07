const Faq = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "What type of companies do you work with?",
      answer:
        "Adaptive Intelligence International works with companies of all shapes and sizes. Both F500 and small and medium-sized enterprises have each benefited from our bespoke approach to strategy, branding and dramatically enhanced key messaging. We’re focused on working with companies that have open minds, moral caliber and wish to make a lasting impression in their industry.",
    },
    {
      id: "faq-2",
      question: "Why invest in branding?",
      answer:
        "The power of your brand ultimately determines how successful you are over time. While marketing gimmicks can turn heads for a moment, real brands make an impression that lasts a lifetime. We build our campaigns around the heart of both what you do, and why you do it. As it turns out, this is what actually matters to customers no matter where they are around the globe.",
    },
    {
      id: "faq-3",
      question: "What is our process?",
      answer:
        "We lead our process with a comprehensive discovery phase that allows us to learn the ins and outs of your company and the campaign at hand. From founder interviews to creative ideation sessions with your core team and leadership, we only dive headfirst into our campaigns after asking the right questions. From there, we’ll enter your project into production and regularly communicate key milestones with stakeholders.",
    },
    {
      id: "faq-4",
      question: "What are our timeframes?",
      answer:
        "Production timeframes vary based on the complexity and size of your project. If your timeframe is especially sensitive, we recommend letting us know from the get-go. We’ll let you know what’s possible and can deploy rush-services under special circumstances.",
    },
    {
      id: "faq-5",
      question: "How exactly and how often will you communicate?",
      answer:
        "We defer to the method and frequency of communication our clients prefer. Our team at Adaptive Intelligence views creative work as a collaboration, which is why we’re happy to let you know what decisions we’re making and why during each phase of your project. If you have questions or just want a little reassurance that your project is in good hands, we’re here. If you prefer a hands-off relationship, we can complete your project after intake and discovery, allowing you to focus on other critical business needs.",
    },
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
