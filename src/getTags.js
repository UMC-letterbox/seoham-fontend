import { data } from "autoprefixer";

data = [
    {           
        id: 0, 
        name: "HBD",
        color: 'rgb(253,164,175)',
        letters: [
            {
                id: 0,
                writer: "이해연",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 1,
                writer: "몽몽이",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 2,
                writer: "냥냥이",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 3,
                writer: "우영우",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 4,
                writer: "바비",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 5,
                writer: "윰",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
        ],
    },
    {
        id: 1,   
        name: "friends",
        color: 'rgb(253,164,175)',
        letters: [
            {
                id: 0,
                writer: "몽몽이",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 1,
                writer: "몽몽이",
                content: "몽몽",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 2,
                writer: "냥냥이",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 3,
                writer: "우영우",
                content: "기러기 토마토 스위스 인도인 별똥별 우영우! 역삼역?",
                year: 2022,
                month: 7,
                day: 25
            },
            {
                id: 4,
                writer: "바비",
                content: "와~ 생일 축하해!! 오늘 맛있는 거 많이 먹고 재밌는 하루 보내~!",
                year: 2022,
                month: 7,
                day: 25
            },

        ]
    },
    {
        id: 2,   
        name: "congratulation",
        color: 'rgb(253,164,175)',
        letters: [
        ]
    },
]

export function addTag(tagName, tagColor) {
    data.push(
        {
            id: data[data.length-1].id + 1,
            name: tagName,
            color: tagColor,
            letters: [

            ]
        }
    )
}

export function modiTag(id, tagName, tagColor) {
    for(let i=0; i<data.length; i++){
        if(data[i].id === id){
            data[i].name = tagName;
            data[i].color = tagColor;
        }
    }
}

export function addLetter(tagId, writer, contents, year, month, day) {
    console.log(tagId, typeof(tagId));
    for(let i=0; i<data.length; i++) {
        console.log(data[i].id, typeof(data[i].id));
        if(data[i].id === Number(tagId)){
            console.log('길이?', data[i].letters.length);
            let id = 0
            if (data[i].letters.length !== 0){
                id = data[i].letters[data[i].letters.length - 1].id + 1;
            }
            let letter = {
                id: id,
                writer: writer,
                content: contents,
                year: year,
                month: month,
                day: day
            }
            data[i].letters.push(letter);
        }
    }
    
}

export function deleteTag(id) {
    //console.log("맞나?");
    for(let i=0; i<data.length; i++){
        //console.log('?', data[i].id, id);
        if (data[i].id === Number(id)){
            //console.log("맞아?")
            data.splice(i, 1);
            i--;
        }
    }
    console.log(data);
}

export function getTags() {
    return (data);
}

export function getTag(id) {
    for(let i=0; i<data.length; i++){
        if(data[i].id === Number(id)){
            return data[i];
        }
    }
}

export function getTaginfo(id) {
    for(let i=0; i<data.length; i++){
        if(data[i].id === id){
            return {name: data[i].name, color: data[i].color}
        }
    }
}


export function getLetter(tagId, id) {
    let tagName = "";
    for (let i=0; i<data.length; i++) {
        //console.log('getLetter 확인', data[i].id, typeof(tagId));
        if(data[i].id === Number(tagId)){
            //console.log('들어왔니');
            tagName = data[i].name;
            for (let j=0; j<data[i].letters.length; j++){
                if(data[i].letters[j].id === Number(id)){
                    console.log('getLetter 확인', tagName, data[i].letters[j])
                    return {tag: tagName, letter: data[i].letters[j]};
                }
            } 
        }
    }
}

export function deleteLetter(tagId, id) {
    //console.log("맞나?");
    for(let i=0; i<data.length; i++){
        //console.log('?', data[i].id, id);
        if (data[i].id === Number(tagId)){
            //console.log("맞아?")
            for(let j=0; j<data[i].letters.length; j++){
                if(data[i].letters[j].id === Number(id)){
                    data[i].letters.splice(j, 1);
                    j--;
                }
            }
        }
    }
    console.log(data);
}

//export default getTags;