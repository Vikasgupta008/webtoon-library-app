// src/pages/WebtoonDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h1`
  margin: 20px 0;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

function WebtoonDetail() {
  const [webtoon, setWebtoon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchWebtoon = async () => {
      const res = await axios.get(`http://localhost:5000/api/webtoons/${id}`);
      setWebtoon(res.data);
    };
    fetchWebtoon();
  }, [id]);

  if (!webtoon) return <div>Loading...</div>;

  return (
    <DetailContainer>
      <Image src={webtoon.thumbnail} alt={webtoon.title} />
      <Title>{webtoon.title}</Title>
      <Description>{webtoon.description}</Description>
    </DetailContainer>
  );
}

export default WebtoonDetail;