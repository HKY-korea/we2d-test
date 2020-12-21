import React, { useRef } from "react";
import {
  MainSection,
  RemoteBtnGroup,
  DetailSection,
  ReviewSection,
  QuestionSection,
  Notice,
} from "../components/productDetailPage";

const mainObj = {
  frontOfDesigner: "Designed by",
  purchaseInfo: ["판매가", "마일리지", "배송비", "주문수량"],
  defaultSelection: {
    color: "색상",
    kinds: "종류",
    model: "기종",
  },
  buttonTitle: ["구매하기", "장바구니"],
};

const remoteBtnObj = {
  buttonTitle: ["상품정보", "상품리뷰", "상품문의", "기타안내"],
};

const detailObj = {
  intro: "디자이너가 꿈을 펼치는 공간 위투디",
  frontOfDesigner: "Designer",
  specification: {
    title: "위투디 제품사양",
    data: [
      {
        image: "/images/specification/컬러.png",
        title: "풍부한 색상범위",
        description:
          "수입산 잉크 사용과 ICC 작업으로 색 구현이 높은 디자인 제작",
      },
      {
        image: "/images/specification/재질.png",
        title: "최상급 재질",
        description:
          "단순 PC (폴리카보네이트) 또는 재생 수지 등 저가 재질이 아닌 사빅 (SABIC)사 렉산 (LEXAN™)수지를 사용",
      },
      {
        image: "/images/specification/품질.png",
        title: "확연히 다른 품질",
        description: "디O니, 카O오 등과 거래하는 사출 도장을 이용",
      },
      {
        image: "/images/specification/품질관리.png",
        title: "엄격한 품질관리",
        description:
          "사용되는 잉크, 필름, 케이스, 코팅 등 조건 하나 하나 따져가며 테스트를 하였으며, 이에 가장 이상적인 케이스 제작 환경 구축",
      },
    ],
  },
};

const reviewObj = {
  title: "상품리뷰",
  countName: "리뷰수",
  totalName: "전체",
  writeBtnTitle: "리뷰 작성하기",
  nonReview: {
    title: "등록된 상품리뷰가 없습니다",
    description: "이 상품의 첫 번째 리뷰를 작성해보세요",
  },
  pageSize: 5,
};

const questionObj = {
  title: "상품문의",
  writeBtnTitle: "문의 작성하기",
  nonQuestion: {
    title: "등록된 상품문의가 없습니다",
    description: "이 상품의 첫 번째 문의를 작성해보세요",
  },
  status: {
    waiting: "답변대기중",
    completed: "답변완료",
  },
  answerText: "답변",
  pageSize: 5,
};

const productNoticeObj = {
  title: "유의사항",
  content: [
    {
      subtitle: "제품안내사항",
      description: [
        "- 모니터 화면색상과 실제 제품 색생과의 100% 색상매치는 불가합니다.",
        "- 케이스 마다 무광/유광/기종/코팅에 따라 동일하게 제작하여도 색상이 조금씩 차이가 있습니다.",
        "- 제작 특성상 위치가 1-2mm 차이가 있을 수 있습니다.",
        "- 모든 제품 전면 풀 컬러 제작시 먼지가 있을 수 있으니 꼭 참고바라며, 이 부분은 불량이 아닙니다.",
      ],
    },
    {
      subtitle: "하드케이스",
      description: [
        "- 제작 특성상 100% 정중앙/왜곡이 발생할 수 있습니다.",
        "- 템플릿 위치와 실제 제작위치가 100% 동일하지 않습니다.",
        "- 먼지로 인해 흰색/검정색 점이 있을 수 있습니다.",
        "- 제작 시 금형에 장착 후 제작되기에 안쪽면 작은 범위 오염이 있을 수 있습니다.",
        "- 제작 시 미세먼지 자국이 있을 수 있습니다.",
      ],
    },
    {
      subtitle: "젤리케이스",
      description: [
        "- 제품 특성상 제품 외관 디자인이 약간 변경이 있을 수 있습니다.",
        "- 제작 특성상 미세한 가로줄이 있을 수 있으며 이는 불량이 아닙니다.",
        "- 생산 특성상 검정색 작은점 등은 불량에 해당하지 않습니다.",
        "- 제작 시 미세먼지 자국이 있을 수 있습니다.",
      ],
    },
  ],
};

const noticeObj = {
  title: "배송/교환/환불",
  content: [
    {
      subtitle: "배송안내",
      description: [
        "- 기본배송료는 2,500원 입니다. (도서,산간,오지 일부지역은 배송비가 추가될 수 있습니다)",
        "- 50,000원 이상 구매시 무료배송입니다.",
        "- 본 상품은 주문제작 상품으로 평균 배송일은 입금 확인 후 2~3일입니다.",
        "- 배송예정일은 주문시점(주문순서)에 따라 평균 배송일과는 차이가 있을 수 있습니다.",
      ],
    },
    {
      subtitle: "교환/환불 가능",
      description: [
        "- 상품을 공급 받으신 날로부터 7일이내 교환이 가능합니다.",
        "- 제품에 하자가 있더라도 7일이 지나면 불가한 점 양해바랍니다.",
      ],
    },
    {
      subtitle: "교환/환불 불가",
      description: [
        "- 단순 변심으로 인한 경우",
        "- 고객님의 책임 사유로 상품등이 멸실 또는 훼손된 경우",
        "- 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우",
        "- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우",
        "- 복제가 가능한 상품등의 포장을 훼손한 경우",
      ],
    },
  ],
};

const ProductDetailPage = () => {
  const detailRef = useRef();
  const reviewRef = useRef();
  const questionRef = useRef();
  const infoRef = useRef();

  return (
    <React.Fragment>
      <MainSection obj={mainObj} />
      <RemoteBtnGroup
        obj={remoteBtnObj}
        refs={[detailRef, reviewRef, questionRef, infoRef]}
      />
      <DetailSection obj={detailObj} detailRef={detailRef} />
      <ReviewSection obj={reviewObj} reviewRef={reviewRef} />
      <QuestionSection obj={questionObj} questionRef={questionRef} />
      <Notice obj={productNoticeObj} infoRef={infoRef} />
      <Notice obj={noticeObj} />
    </React.Fragment>
  );
};

export default ProductDetailPage;
