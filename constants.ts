import { FolderType, Letter, Relationship } from './types';

export const RELATIONSHIP_FONTS: Record<Relationship, string> = {
  [Relationship.TEACHER]: 'font-teacher text-gray-500', // Gowun Batang
  [Relationship.FRIEND]: 'font-friend text-gray-600', // JoseonGulim
  [Relationship.FAMILY]: 'font-serif-kr text-gray-700', // Nanum Myeongjo
  [Relationship.LOVER]: 'font-lover text-gray-800', // Nanum Pen Script
  [Relationship.COLLEAGUE]: 'font-sans-kr text-gray-900 tracking-tight', // Noto Sans KR
  [Relationship.STAR]: 'font-star text-black uppercase tracking-widest', // Black Han Sans
};

export const MOCK_LETTERS: Letter[] = [
  {
    id: '1',
    type: FolderType.RECEIVED,
    relationship: Relationship.FRIEND,
    sender: '친구',
    receiver: '나',
    date: '2025-05-15',
    place: '어의관',
    excerpt: "팍팍한 대학생활 속에서 제 웃음버튼이 되어주신거 같아 남몰래 감사인사 보냅니다.",
    content: "누님 팍팍한 대학생활 속에서 제 웃음버튼이 되어주신거 같아 남몰래 감사인사 보냅니다. 웃길려고 한게 아닌데 웃긴 것이 어쩜 진정한 즐거움이 아닐까요? (누나가 엑소 보고 웃는것처럼 말입니다) 덕분에 한줄기 빛이 되었습니다. 남은 학기 잘 보내시고 시험도, 하는 일도, '덕질'도 다 잘되시길 바래요 -두일-",
    designImage: '/lettersfrom/designImage_2025_hdy.jpg',
    scanImage: '/lettersfrom/scanImage_2025_hdy.jpg',
  },
  {
    id: '2',
    type: FolderType.RECEIVED,
    relationship: Relationship.FRIEND,
    sender: '친구',
    receiver: '나',
    date: '2020-08-20',
    place: '서울재즈페스티벌',
    excerpt: "우리는 항상 한여름이나 한겨울에 만나게 되는 것 같아",
    content: "안녕 슬비 언니! 우리는 항상 한여름이나 한겨울에 만나게 되는 것 같아 아닌가? 몰라 그냥 언니랑 만났던 날들을 떠올리면 여름, 겨울의 계절감도 같이 느껴져. 너무 좋다! 언니 취향을 잘 모르겠어서 내 취향의 편지봉투와 편지지야 토끼는 알다시피 도영이야 네잎클로버는 언니🍀 항상 고맙고 무엇보다 언니가 건강했으면 좋겠다ㅎ 진짜 항상 응원하는 거 알지 당신의 편한사람(Just Friends) 소윤이가",
    designImage: '/lettersfrom/designImage_2025_jsy.jpg',
    scanImage: '/lettersfrom/scanImage_2025_jsy.jpg',
  },
  {
    id: '3',
    type: FolderType.RECEIVED,
    relationship: Relationship.FRIEND,
    sender: '친구',
    receiver: '나',
    date: '2020-10-18',
    place: '망원동',
    excerpt: "너와 함께하는 세 번째 겨울, 여전히 설레.",
    content: "슬비에게... 슬비 안녕 ㅎㅎ 방금까지 얼굴 보고 왔는데 이렇게 편지를 쓰려고 하니까 어색하다. 우선! 이 편지의 가장 큰 목적인 너의 생일날 진심으로 축하해! 사실 아직 생일은 다가오지 않았지만, 미리 축하인사와 선물, 편지를 건내^^ 나는 7월달이 생일이어서 너보다 빨리 생일을 맞았잖아? 사실 내가 꿈꿔보던 20살의 생일과 현실은 좀 달랐어. 무척 들뜨고, 새롭고, 희망찬 20살이 될 줄 알았는데 19살의 나와 별반 달라진게 없는... 그런 평범한 생일이었어. 너는 어떠니?",
    designImage: '/lettersfrom/designImage_2025_yye.jpg',
    scanImage: '/lettersfrom/scanImage_2025_yye.jpg',
  }
  /*
  ,
  {
    id: '4',
    type: FolderType.RECEIVED,
    relationship: Relationship.FAMILY,
    sender: '친구',
    receiver: '나',
    date: '2010-03-02',
    place: '서울 자취방',
    excerpt: "밥 굶지 말고, 힘들면 언제든 돌아와도 돼.",
    content: "사랑하는 우리 딸. 서울살이 시작한 첫 날이구나. 짐 정리는 다 했니? 엄마가 싸준 반찬 냉장고에 잘 넣어두고. 혼자라고 대충 먹지 말고 꼭 챙겨 먹어라. 세상이 아무리 힘들어도 엄마 아빠는 항상 네 편이야. 힘들면 언제든 전화하고. 사랑한다.",
    designImage: '/assets/designImage_2025_sample.jpg',
    scanImage: '/assets/scanImage_2025_sample.jpg',
  },
  {
    id: '5',
    type: FolderType.SENT,
    relationship: Relationship.STAR,
    sender: '나',
    receiver: '재현',
    date: '2022-04-10',
    place: '회사 옥상 정원',
    excerpt: "대리님 덕분에 지난 프로젝트 무사히 마칠 수 있었습니다.",
    content: "박 대리님, 이번 프로젝트 기간 동안 정말 고생 많으셨습니다. 제가 실수해서 당황했을 때 차분하게 수습해 주신 것, 평생 잊지 못할 거예요. 배울 점이 많은 선배님과 함께 일할 수 있어서 영광이었습니다. 앞으로도 잘 부탁드립니다!",
    designImage: '/assets/designImage_2025_yye.jpg',
    scanImage: '/assets/scanImage_2025_yye.jpg',
  },
  {
    id: '6',
    type: FolderType.SENT,
    relationship: Relationship.STAR,
    sender: '나',
    receiver: 'David Bowie',
    date: '2016-01-11',
    place: '내 방 책상 위',
    excerpt: "우리는 하루만이라도 영웅이 될 수 있어요.",
    content: "당신의 부고를 듣고 펜을 듭니다. 당신의 음악은 제 청춘의 전부였고, 제가 세상과 다르다는 것을 두려워하지 않게 해준 용기였습니다. 별이 되어 돌아간 그곳에서도 편안하시길. 당신은 영원히 나의 스타입니다. We can be heroes, just for one day.",
    designImage: '/assets/designImage_2025_sample.jpg',
    scanImage: '/assets/scanImage_2025_sample.jpg',
  }
    */
];