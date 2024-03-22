import { useState } from "react";
import { Title } from "../../App.styled";
import {
  FaqItem,
  FaqItemText,
  FaqItemTitle,
  FaqList,
  FaqSection,
} from "./Faq.styled";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "WHAT IS AN NFT COLLECTION?",
      answer:
        " An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
      open: true,
    },
    {
      question: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
      answer:
        " To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.",
      open: false,
    },
    {
      question: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
      answer:
        "  Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
      open: false,
    },
    {
      question: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
      answer:
        " As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
      open: false,
    },
  ]);

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
    <FaqSection className="container">
      <Title>FAQ</Title>
      <FaqList>
        {faqs.map(({ question, answer, open }, index) => (
          <FaqItem key={index} onClick={() => toggleFAQ(index)} open={open}>
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
