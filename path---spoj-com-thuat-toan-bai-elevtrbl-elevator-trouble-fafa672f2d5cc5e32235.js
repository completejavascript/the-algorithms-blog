webpackJsonp([35214111707025],{806:function(l,n){l.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Bạn đang trên đường đi đến buổi phỏng vấn cho vị trí lập trình viên. Và thực tế, bạn đã bị muộn. Buổi phỏng vấn được diễn ra ở một tòa nhà rất cao và bạn đang ở tầng s, nơi mà bạn gặp một chiếc thang máy. Biết rằng,  thang máy sẽ có 2 nút bấm được đánh dấu là “UP u” và “DOWN d”. Bạn kết luận là nút UP sẽ đưa thang máy lên trên u tầng nếu như có đủ số tầng phía trên, và nút DOWN sẽ đưa thang máy đi xuống d tầng nếu có đủ số tầng phía dưới. Trường hợp không có đủ số tầng thì thang máy sẽ không lên hoặc không xuống. Biết rằng buổi phỏng vấn được diễn ra tại tầng g, và tòa nhà này có f tầng. Bạn hãy nghĩ ra thuật toán và lập trình để tính ra số lần phải bấm nút là ít nhất để đi được đến đúng vị trí tầng phỏng vấn. Nếu không thể đển được đúng tầng thì in ra dòng chữ “use the stairs”. </p>\n<p>Cho số f, s, g, u và d (lần lượt là số lượng tầng tại tòa nhà, tầng bắt đầu, tầng đích, số tầng lên và số tầng xuống). Tìm ra số lần phải bấm nút ít nhất để đi được từ tầng s đến tầng g và in ra số đó hoặc trong trường hợp không thể đi được thì in ra “use the stairs”.</p>\n<h3>Đầu vào:</h3>\n<p>Đầu vào bao gồm một dòng, chứa các số f s g u d, trong đó 1 &#x3C;= s, g &#x3C;= f &#x3C;= 1000000 và 0 &#x3C;= u, d &#x3C;= 1000000. Các tầng được đánh số từ 1. Ví dụ có 10 tầng thì các tầng sẽ là 1, 2, 3,…,10.</p>\n<h3>Đầu ra:</h3>\n<p>In ra số lần phải bấm nút là ít nhất để đi được từ tầng s đến tầng g. Trường hợp không thể đi được thì in ra dòng chữ “use the stairs”.</p>\n<h3>Ví dụ 1:</h3>\n<p><strong>Đầu vào:</strong> </p>\n<p>10 1 10 2 1 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>6</p>\n<h3>Ví dụ 2:</h3>\n<p><strong>Đầu vào:</strong> </p>\n<p>100 2 1 1 0 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>use the stairs </p>\n<p><em>Các bạn có thể tham khảo link gốc đề bài tiếng anh và submit code tại đây: <a href="http://www.spoj.com/problems/ELEVTRBL/">http://www.spoj.com/problems/ELEVTRBL/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>Bài toán này ta khó có thể sử dụng thuật toán vét cạn, hay quay lui có điều kiện vì số lượng tầng ở đây có thể lên đến N = 1000000. Như vậy, chắc chắn sẽ bị time limit. + Ta sẽ sử dụng thuật toán <a href="/the-algorithms-blog/category/tim-kiem-theo-chieu-rong-bfs/">tìm kiếm theo chiều rộng – BFS</a>. Tư tưởng ở đây là ta sẽ đi tính số lần bấm nút nhỏ nhất để đi được hết tất cả các tầng.</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán và lập trình trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91916363" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-elevtrbl-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-elevtrbl-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-elevtrbl-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-elevtrbl-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-elevtrbl-cpp-LC3" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-elevtrbl-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">1000005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-elevtrbl-cpp-LC5" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-elevtrbl-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> f, s, g, u, d;          <span class="pl-c"><span class="pl-c">//</span> Chứa những thông tin với tên trùng với đầu bài cho</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-elevtrbl-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Number[MAX];            <span class="pl-c"><span class="pl-c">//</span> Lưu số lần bấm nút nhỏ nhất để đi đến mỗi tầng</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-elevtrbl-cpp-LC8" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-elevtrbl-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> mảng đóng vai trò là hàng đợi - queue,</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-elevtrbl-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> để triển khai thuật toán tìm kiếm theo chiều rộng.</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-elevtrbl-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> queue[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-elevtrbl-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> fr, re, leng;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-elevtrbl-cpp-LC13" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-elevtrbl-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Enqueue</span>(<span class="pl-k">int</span> id)</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-elevtrbl-cpp-LC15" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-elevtrbl-cpp-LC16" class="blob-code blob-code-inner js-file-line">    queue[re] = id;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-elevtrbl-cpp-LC17" class="blob-code blob-code-inner js-file-line">    re = (re + <span class="pl-c1">1</span>) % MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-elevtrbl-cpp-LC18" class="blob-code blob-code-inner js-file-line">    leng++;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-elevtrbl-cpp-LC19" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-elevtrbl-cpp-LC20" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-elevtrbl-cpp-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">Dequeue</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-elevtrbl-cpp-LC22" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-elevtrbl-cpp-LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> t = queue[fr];</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-elevtrbl-cpp-LC24" class="blob-code blob-code-inner js-file-line">    fr = (fr + <span class="pl-c1">1</span>) % MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-elevtrbl-cpp-LC25" class="blob-code blob-code-inner js-file-line">    leng--;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-elevtrbl-cpp-LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> t;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-elevtrbl-cpp-LC27" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-elevtrbl-cpp-LC28" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-elevtrbl-cpp-LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">BFS</span>(<span class="pl-k">int</span> start)</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-elevtrbl-cpp-LC30" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-elevtrbl-cpp-LC31" class="blob-code blob-code-inner js-file-line">    fr = re = leng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-elevtrbl-cpp-LC32" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-elevtrbl-cpp-LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Cho tầng đầu tiên vào hàng đợi, giá trị số lần bấm nút sẽ là 0</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-elevtrbl-cpp-LC34" class="blob-code blob-code-inner js-file-line">    Number[start] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-elevtrbl-cpp-LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Enqueue</span>(start);</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-elevtrbl-cpp-LC36" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-elevtrbl-cpp-LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(leng &gt; <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-elevtrbl-cpp-LC38" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-elevtrbl-cpp-LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Lần lượt dequeue ra và cập nhật trạng thái mới</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-elevtrbl-cpp-LC40" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">int</span> tmp = <span class="pl-c1">Dequeue</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-elevtrbl-cpp-LC41" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-elevtrbl-cpp-LC42" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Nếu gặp phải tầng đích thì dừng luôn</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-elevtrbl-cpp-LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(tmp == g) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-elevtrbl-cpp-LC44" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-elevtrbl-cpp-LC45" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Nếu bấm lên trên</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-elevtrbl-cpp-LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (tmp + u &lt;= f &amp;&amp; Number[tmp + u] == -<span class="pl-c1">1</span>) </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-elevtrbl-cpp-LC47" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-elevtrbl-cpp-LC48" class="blob-code blob-code-inner js-file-line">            Number[tmp + u] = Number[tmp] + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-elevtrbl-cpp-LC49" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">Enqueue</span>(tmp + u);</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-elevtrbl-cpp-LC50" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-elevtrbl-cpp-LC51" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-elevtrbl-cpp-LC52" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Nếu bấm xuống dưới</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-elevtrbl-cpp-LC53" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (tmp - d &gt;= <span class="pl-c1">1</span> &amp;&amp; Number[tmp - d] == -<span class="pl-c1">1</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-elevtrbl-cpp-LC54" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-elevtrbl-cpp-LC55" class="blob-code blob-code-inner js-file-line">            Number[tmp - d] = Number[tmp] + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-elevtrbl-cpp-LC56" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">Enqueue</span>(tmp - d);</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-elevtrbl-cpp-LC57" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-elevtrbl-cpp-LC58" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-elevtrbl-cpp-LC59" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-elevtrbl-cpp-LC60" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-elevtrbl-cpp-LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-elevtrbl-cpp-LC62" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-elevtrbl-cpp-LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-elevtrbl-cpp-LC64" class="blob-code blob-code-inner js-file-line">    </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-elevtrbl-cpp-LC65" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> comment dòng này trước khi submit</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-elevtrbl-cpp-LC66" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-elevtrbl-cpp-LC67" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-elevtrbl-cpp-LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> nhập thông tin đầu vào, tên biến giống với đề bài cho</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-elevtrbl-cpp-LC69" class="blob-code blob-code-inner js-file-line">    cin &gt;&gt; f &gt;&gt; s &gt;&gt; g &gt;&gt; u &gt;&gt; d;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-elevtrbl-cpp-LC70" class="blob-code blob-code-inner js-file-line">    </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-elevtrbl-cpp-LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> khởi tạo </span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-elevtrbl-cpp-LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">1</span>; i &lt;= f; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-elevtrbl-cpp-LC73" class="blob-code blob-code-inner js-file-line">        Number[i] = -<span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-elevtrbl-cpp-LC74" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-elevtrbl-cpp-LC75" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">BFS</span>(s);</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-elevtrbl-cpp-LC76" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-elevtrbl-cpp-LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Nếu Number[g] == -1 nghĩa là không thể đi được tới tầng g</span></td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-elevtrbl-cpp-LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(Number[g] == -<span class="pl-c1">1</span>) cout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>use the stairs<span class="pl-pds">&quot;</span></span> &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-elevtrbl-cpp-LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">else</span> cout &lt;&lt; Number[g] &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-elevtrbl-cpp-LC80" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-elevtrbl-cpp-LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-elevtrbl-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-elevtrbl-cpp-LC82" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/0b9e655cb7fc433a9254db3c8f5cf431/raw/0262abe2d8c4ff959f5e804c546e39feaddefbfd/ELEVTRBL.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/0b9e655cb7fc433a9254db3c8f5cf431#file-elevtrbl-cpp">ELEVTRBL.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-09-25---spoj-com-thuat-toan-bai-elevtrbl-elevator-trouble/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài ELEVTRBL – Elevator Trouble",date:"25/09/2016",categories:["spoj","Tìm kiếm theo chiều rộng - BFS"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tìm kiếm theo chiều rộng bfs"]},fields:{slug:"/spoj-com-thuat-toan-bai-elevtrbl-elevator-trouble/"},excerpt:"Đề bài: Bạn đang trên đường đi đến buổi phỏng vấn cho vị trí lập trình viên. Và thực tế, bạn đã bị muộn. Buổi phỏng vấn được diễn ra ở một…",timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ONEZERO – Ones and zeros"},fields:{slug:"/spoj-com-thuat-toan-bai-onezero-ones-and-zeros/"}},nextPost:{frontmatter:{title:"SPOJ.COM - Thuật toán bài PT07Y - Is it a tree"},fields:{slug:"/spoj-com-thuat-toan-bai-pt07y-is-it-a-tree/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-elevtrbl-elevator-trouble/",prevSlug:"/spoj-com-thuat-toan-bai-onezero-ones-and-zeros/",nextSlug:"/spoj-com-thuat-toan-bai-pt07y-is-it-a-tree/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-elevtrbl-elevator-trouble-fafa672f2d5cc5e32235.js.map