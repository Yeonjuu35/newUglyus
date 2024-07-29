import styled from 'styled-components';

// 버튼
export const Button = styled.button`
    border-radius: 20px;
    font-weight: 600;
    background : '$uglyorange'
    border : none;
    color : '#fff'

    font-size : ${props => props.small ? '13px' : props.medium ? '15px' : '22px' }
    width : ${props => props.mini ? '135px' : props.medi ? '260px' : '400px'}
    height : ${props => props.short ? '40px' : '60px'}
    @media (max-width: 990px) {
    }
` 


// 추후 수정
export const Title = styled.h2`
    font-family: ${props => props.title ? "Rubik" : "Pretendard" } ;
    font-size: 38px;
    font-weight: 700;
    color: #FE663F;
    letter-spacing: -0.5px;
    line-height: 2.5rem;
    @media (max-width: 990px) {
          font-size: 28px;
          line-height: 1.7rem;       
    }
`;

export const Leadcopy = styled.p`
    font-family: ${props => props.leadcopy ? "Pretendard" : "Rubik"};
    font-size: 18px;
    font-weight: 600;
    color: #414B5A;
    letter-spacing: -0.5px;
    line-height: 1.8rem;
    @media (max-width: 990px) {    
        font-size: 16px;
        line-height: 1.4rem;
    }
`;