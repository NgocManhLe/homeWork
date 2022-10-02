import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const  [text, setText] = useState('')
  const  [count, setCount] = useState(0)

  const textvalue = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    const time = setTimeout(setCount(text ? text.trim().replace(/\s\s/g,' ').split(' ').length : 0),500)
   
    return () => clearTimeout(time)
  }, [text])
// 


  const [hideBtn, setHideBtn] = useState(false)
  const [prePosition, setPrePosition] = useState(0)

  const onClick = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const active = () => window.pageYOffset

  useEffect(() => {
    const listenScroll = () => {
			if (active() <= prePosition) setHideBtn(true)

			if (active() === 0) setHideBtn(false)
			setPrePosition(active())
		}

		document.addEventListener('scroll', listenScroll)
    return () => {
      document.removeEventListener('scroll', listenScroll)
    }
    
		
  },[prePosition])

  return (
    <div className="App" style={{height: 1500}}>
      <input type='text' onChange={textvalue} value={text}  placeholder = 'Nhap cau ban muon tai day'></input>
      <p>So tu: {count}</p>
      <div>
        <p style={{color: "red",lineHeight:2}}>
        Nếu có dịp đi về một vùng quê Việt Nam, bạn hãy lắng nghe văng vẳng trong gió lời ca dao dịu dàng. Lời ca dao đi ra từ lồng ngực thổn thức tình người của ông bà, cha mẹ. Những lời ca dao ấy thật mượt mà, đằm thắm biết bao, lối ca gieo vào lòng người cái trữ tình mộc mạc ngàn đời của hồn người Việt.

Người Việt cổ chúng ta hàng năm trước rất ưa ca hát. Họ hát khi lao động, hát ru con, ru em trong những ngày thường, hát trao duyên nam nữ trong những dịp lễ hội. và từ đó, ca dao ra đời đã diễn đạt sâu sắc tình cảm, tâm trạng, suy nghĩ và cảm xúc của người bình dân trong lao động, trong xã hội, trong gia đình và những người xung quanh.

Ca dao (歌謠) là thơ ca dân gian Việt Nam được truyền miệng dưới dạng những câu hát không theo một điệu nhất định, thường phổ biến theo thể thơ lục bát cho dễ nhớ, dễ thuộc. Ca dao là một từ Hán Việt, theo từ nguyên, ca là bài hát có chương khúc, giai điệu; dao là bài hát ngắn, không có giai điệu, chương khúc.

Nội dung của ca dao:

Ca dao phản ánh lịch sử: Ca dao lịch sử không phản ánh hiện tượng lịch sử trong quá trình diễn biến của nó, mà chỉ nhắc đến sự kiện lịch sử để nói lên thái độ, quan điểm của nhân dân.
Phản ánh nếp sống, phong tục, tập quán truyền thống; phản ánh đời sống tình cảm nhân dân; phản ánh đời sống xã hội cũ.
Chứa đựng tiếng cười trào phúng.
Học Theo đảng
Không chỉ có nội dung sâu sắc, ca dao còn là những kết tinh về nghệ thuật. Ca dao thường được sáng tác theo hai thể truyền thống: lục bát và song thất lục bát.

Ngoài ra, còn có thể nói lối. Mỗi thể có những quy định khác nhau về tiếng, gieo vần và thanh điệu. Nếu một bài ca dao tuân theo những quy định ấy thì ta có dạng nguyên thể, nhưng ca dao thường hay sử dụng loại biến thể với lối sử dụng từ ngữ và số tiếng rất linh hoạt.

Ngôn ngữ trong ca dao là ngôn ngữ sinh hoạt hàng ngày nhưng đã được tui rèn, gọt giũa qua bao thế hệ người Việt Nam, góp phần rèn giũa tiếng Việt và bảo vệ tinh hoa của tiếng Việt trong suốt trường kì lịch sử của dân tộc.

Làng quê Việt Nam qua bao đời vẫn yên bình, êm ả, những làn điệu ca dao – dân ca vẫn mượt mà, đằm thắm. Ca dao là đời sống tâm hồn người Việt, cùng với người Việt, ca dao sẽ bất tử trước thời gian.
        </p>
        <p style={{color: "red",lineHeight:2}}>
        Nếu có dịp đi về một vùng quê Việt Nam, bạn hãy lắng nghe văng vẳng trong gió lời ca dao dịu dàng. Lời ca dao đi ra từ lồng ngực thổn thức tình người của ông bà, cha mẹ. Những lời ca dao ấy thật mượt mà, đằm thắm biết bao, lối ca gieo vào lòng người cái trữ tình mộc mạc ngàn đời của hồn người Việt.

Người Việt cổ chúng ta hàng năm trước rất ưa ca hát. Họ hát khi lao động, hát ru con, ru em trong những ngày thường, hát trao duyên nam nữ trong những dịp lễ hội. và từ đó, ca dao ra đời đã diễn đạt sâu sắc tình cảm, tâm trạng, suy nghĩ và cảm xúc của người bình dân trong lao động, trong xã hội, trong gia đình và những người xung quanh.

Ca dao (歌謠) là thơ ca dân gian Việt Nam được truyền miệng dưới dạng những câu hát không theo một điệu nhất định, thường phổ biến theo thể thơ lục bát cho dễ nhớ, dễ thuộc. Ca dao là một từ Hán Việt, theo từ nguyên, ca là bài hát có chương khúc, giai điệu; dao là bài hát ngắn, không có giai điệu, chương khúc.

Nội dung của ca dao:

Ca dao phản ánh lịch sử: Ca dao lịch sử không phản ánh hiện tượng lịch sử trong quá trình diễn biến của nó, mà chỉ nhắc đến sự kiện lịch sử để nói lên thái độ, quan điểm của nhân dân.
Phản ánh nếp sống, phong tục, tập quán truyền thống; phản ánh đời sống tình cảm nhân dân; phản ánh đời sống xã hội cũ.
Chứa đựng tiếng cười trào phúng.
Học Theo đảng
Không chỉ có nội dung sâu sắc, ca dao còn là những kết tinh về nghệ thuật. Ca dao thường được sáng tác theo hai thể truyền thống: lục bát và song thất lục bát.

Ngoài ra, còn có thể nói lối. Mỗi thể có những quy định khác nhau về tiếng, gieo vần và thanh điệu. Nếu một bài ca dao tuân theo những quy định ấy thì ta có dạng nguyên thể, nhưng ca dao thường hay sử dụng loại biến thể với lối sử dụng từ ngữ và số tiếng rất linh hoạt.

Ngôn ngữ trong ca dao là ngôn ngữ sinh hoạt hàng ngày nhưng đã được tui rèn, gọt giũa qua bao thế hệ người Việt Nam, góp phần rèn giũa tiếng Việt và bảo vệ tinh hoa của tiếng Việt trong suốt trường kì lịch sử của dân tộc.

Làng quê Việt Nam qua bao đời vẫn yên bình, êm ả, những làn điệu ca dao – dân ca vẫn mượt mà, đằm thắm. Ca dao là đời sống tâm hồn người Việt, cùng với người Việt, ca dao sẽ bất tử trước thời gian.
        </p>
      </div>
      <button onClick={onClick} className= {hideBtn ? ' ' : 'hidden'}>up|^</button>
    </div>
  );
}

export default App;
