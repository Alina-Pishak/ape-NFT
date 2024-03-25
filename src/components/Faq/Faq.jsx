import { useState } from "react";
import { Title } from "../../App.styled";
import {
  FaqImg,
  FaqItem,
  FaqItemText,
  FaqItemTitle,
  FaqList,
  FaqSection,
} from "./Faq.styled";
import { faqsData } from "../../data/faqs";

const Faq = () => {
  const [faqs, setFaqs] = useState(faqsData);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <FaqSection className="container" id="faq">
      <Title>FAQ</Title>
      <FaqList>
        {faqs.map(({ img, question, answer, open }, index) => (
          <FaqItem key={index} onClick={() => toggleFAQ(index)} open={open}>
            <picture>
              <source
                srcSet={`${img[0]} 1x,${img[1]} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${img[0]} 1x,${img[1]} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${img[0]} 1x,${img[1]} 2x`}
                media="(max-width: 767px)"
              />
              <FaqImg src={img[0]} alt="Monkey" open={open} />
            </picture>
            <div>
              <FaqItemTitle open={open}>{question}</FaqItemTitle>
              <FaqItemText open={open}>{answer}</FaqItemText>
            </div>
          </FaqItem>
        ))}
      </FaqList>
    </FaqSection>
  );
};

export default Faq;
