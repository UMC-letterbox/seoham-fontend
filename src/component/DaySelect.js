import {useEffect, useState} from "react";

function DaySelect({parentFunction}){
    const now = new Date();
    const [form, setForm] = useState({
        year: String(now.getFullYear()),
        month: "01",
        day: "01",
    });
    
    let years = [];
    for (let y = now.getFullYear(); y >= 1930; y -= 1){
        years.push(y);
    }
    let months = [];
    for (let m = 1; m <= 12; m += 1){
        if (m<10) {
            months.push("0" + m.toString());
        } else{
            months.push(m.toString());
        }
    }
    let days = [];
    let date = new Date(form.year, form.month, 0).getDate();
    for (let d = 1; d <= date; d += 1){
        if(d < 10) {    
            days.push("0" + d.toString());
        } else {
            days.push(d.toString());
        }
    }

    useEffect(()=>{
        parentFunction([form.year, form.month, form.day]);
    }, [form])

    return (
        <div>
            <select
                value={form.year}
                onChange={(e) =>
                    setForm({ ...form, year: e.target.value })
                }
                className="w-1/3"
            >
                {years.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
            <select
                value={form.month}
                onChange={(e) =>
                    setForm({ ...form, month: e.target.value })
                }
                className="w-1/3"
            >
                <option value={-1}>-월-</option>                
                {months.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>                        
            <select
                value={form.day}
                onChange={(e) =>
                    setForm({ ...form, day: e.target.value })
                }
                className="w-1/3"
            >
                <option value={-1}>-일-</option>
                {days.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DaySelect;