// components/FAQSection.js
'use client'
import { useState } from 'react'

const FAQSection = ({ title, description, faqs }) => {
    const [activeKey, setActiveKey] = useState(null)

    const toggleAccordion = (key) => {
        setActiveKey(activeKey === key ? null : key)
    }

    return (
        <section className="section-box box-faqs">
            <div className="container">
                <div className="text-center mb-70">
                    <h3 className="heading-2 mb-20">{title}</h3>
                    <p className="text-md neutral-700">
                        {description}
                    </p>
                </div>
                <div className="box-2-col-faqs">
                    {faqs.map((faqGroup, groupIndex) => (
                        <div className="faqs-col" key={groupIndex}>
                            <div className="accordion accordion-flush" id={`accordionFAQS-${groupIndex}`}>
                                {faqGroup.map((faq, index) => {
                                    const itemKey = groupIndex * 3 + index + 1
                                    const isActive = activeKey === itemKey
                                    return (
                                        <div className="accordion-item" key={itemKey}>
                                            <h2 
                                                className="accordion-header" 
                                                id={`flush-heading-${itemKey}`}
                                                onClick={() => toggleAccordion(itemKey)}
                                            >
                                                <button 
                                                    className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#flush-collapse-${itemKey}`}
                                                    aria-expanded={isActive}
                                                    aria-controls={`flush-collapse-${itemKey}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div 
                                                className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                                                id={`flush-collapse-${itemKey}`}
                                                aria-labelledby={`flush-heading-${itemKey}`}
                                                data-bs-parent={`#accordionFAQS-${groupIndex}`}
                                            >
                                                <div className="accordion-body">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection