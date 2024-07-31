import React from 'react'
import { Button } from '../common/style';

function Footer() {
    return (
        <footer className='d-flex justify-content-between container customWidth2 px-0 py-5'>
            <div>
                <div className='d-flex flex-column'>
                    <h1 className='order-3'>
                        <img className='logoWidth' src='./img/header/logo.svg' alt="어글리어스 로고" />
                    </h1>
                    <h2 className='m-0 fontFootertitle fontBold mb-3'>어글리어스 고객센터 070.4769.0271</h2>
                    <div className='d-flex mb-4'>
                        <div className='d-flex flex-column me-5'>
                            <p className='fontFooterBd fontSemibold'>화·목요일</p>
                            <p className='fontFooterBd fontSemibold my-1'>월·금요일</p>
                            <p className='fontFooterBd fontSemibold'>토·일·공휴일</p>
                        </div>
                        <div className='d-flex flex-column ms-4'>
                            <p className='fontFootertext fontLight'>11:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
                            <p className='fontFootertext fontLight my-1'>09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</p>
                            <p className='fontFootertext fontLight'>휴무</p>
                        </div>
                    </div>
                    <div className='d-flex mb-5'>
                        <Button small mini short className='me-3'>문의하기</Button>
                        <Button small mini short>자주묻는질문</Button>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-between'>
                <div className='d-flex justify-content-end'>
                    <a href="#" className='footerIcon d-flex justify-content-center align-items-center me-2'>
                        <img src="./img/footer/facebook.svg" alt="페이스북" />
                    </a>
                    <a href="#" className='footerIcon d-flex justify-content-center align-items-center me-2'>
                        <img src="./img/footer/instagram.svg" alt="인스타그램" />
                    </a>
                    <a href="#" className='footerIcon d-flex justify-content-center align-items-center me-2'>
                        <img src="./img/footer/youtube.svg" alt="유튜브" />
                    </a>
                    <a href="#" className='footerIcon d-flex justify-content-center align-items-center'>
                        <img src="./img/footer/twitter.svg" alt="트위터" />
                    </a>
                </div>
                <div>
                    <p className='fontFootertext fontLight text-end'>상호명 : 주식회사 캐비지 | 대표 : 최현주 | 사업자등록번호 : 572-81-02287 | 소재지 : 서울특별시 영등포구 양평로 144, 8층(양평동5가)</p>
                    <p className='fontFootertext fontLight text-end my-1'>통신판매업 신고번호 : 2021-화성동부-0302 | 제휴 및 납품 문의 : biz@uglyus.co.kr | 농산물 납품 및 긴급구출 제보 : farm@uglyus.co.kr</p>
                    <p className='fontFootertext fontLight text-end'>서비스 이용약관개인정보 처리방침 Copyright ⓒ 2024 주식회사 캐비지 All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

