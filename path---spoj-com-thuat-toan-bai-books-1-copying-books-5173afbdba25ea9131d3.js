webpackJsonp([0xbc5e55009f7c],{792:function(n,l){n.exports={data:{post:{html:'<h2><strong>Đề bài:</strong></h2>\n<p>Trước khi máy photo sách được phát minh ra, việc tạo ra một bản photo cho một quyển sách là vô cùng khó khăn. Tất cả nội dung phải được ghi chép lại bằng tay. Một người thợ được đưa cho quyển sách và anh ta phải hoàn thành nó sau một vài tháng. Một trong những người thợ nổi tiếng sống ở thế kỉ 15, và tên anh ta là Tèo. Nhưng dù sao thì công việc cũng vô cùng chán và buồn tẻ. Và chỉ có một cách để cải thiện tình hình đó là thuê những người thợ khác. </p>\n<p>Hồi đó, có một đoàn múa hát muốn trình diễn một vở kịch rất nổi tiếng. Kịch bản được chia ra làm nhiều cuốn. Và diễn viên cần có nhiều bản copy của chúng. Tưởng tượng rằng bạn có m cuốn sách (đánh số từ 1, 2,…, m) có số trang lần lượt là p[1], p[2], …, p[m]. Và bạn phải tạo ra bản copy của mỗi cuốn đó. Nhiệm vụ của bạn là chia m cuốn sách đó cho k người thợ, k &#x3C;= m. Mỗi cuốn chỉ phép giao cho một người thợ duy nhất. Và mỗi người thợ phải nhận những cuốn sách liên tiếp nhau. Có nghĩa là tồn tại một dãy số tăng dần thoả mãn 0 = b[0] &#x3C; b[1] &#x3C; b[2] &#x3C; … &#x3C; b[k] = m sao cho người thợ thứ i lấy những cuốn sách được đánh số giữa b[i-1] + 1 và b[i]. Thời gian để tạo ra bản copy của tất cả những cuốn sách được xác định dựa trên người thợ nhận nhiều việc nhất. Vì vậy, nhiệm vụ đặt ra là tối thiểu hoá số lượng trang sách lớn nhất được giao cho mỗi người thợ. Hãy tìm ra giải pháp cho vấn đề này.</p>\n<h3><strong>Đầu vào:</strong></h3>\n<p>Đầu vào gồm N trường hợp (N &#x3C;= 200). Bắt đầu là số nguyên dương N, là số lượng trường hợp. Sau đó là các trường hợp. Mỗi cái gồm chính xác 2 dòng. Dòng đầu tiên gồm 2 số nguyên m và k, 1 &#x3C;= k &#x3C;= m &#x3C;= 500. Dòng thứ hai bao gồm các số p1, p2,…, pm phân cách nhau bởi dấu cách. Tất cả giá trị này đều là số dương và nhỏ hơn 10000000.</p>\n<h3><strong>Đầu ra:</strong></h3>\n<p>Với mỗi trường hợp, in ra trên một dòng , bao gồm dãy p1, p2,…, pm được chia làm k phần. Sao cho tổng lớn nhất của mỗi phần là nhỏ nhất. Và ưu tiên cho những người thợ đầu tiên trước – nghĩa là người thợ đầu tiên làm ít hơn người thợ thứ 2, … Sử dụng dấu ‘/’ để phân cách các phần. Có 1 dấu cách duy nhất giữa 2 số liên tiếp; giữa số và ‘/’.</p>\n<h3><strong>Ví dụ:</strong></h3>\n<p><strong>Đầu vào:</strong> </p>\n<p>2 </p>\n<p>9 3</p>\n<p>100 200 300 400 500 600 700 800 900 </p>\n<p>5 4 </p>\n<p>100 100 100 100 100 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>100 200 300 400 500 / 600 700 / 800 900 </p>\n<p>100 / 100 / 100 / 100 100 </p>\n<p><strong>Giải thích:</strong> </p>\n<ul>\n<li>\n<p>Trường hợp thứ nhất, tổng lớn nhất của mỗi phần là 1700 </p>\n</li>\n<li>\n<p>Trường hợp thứ hai, tổng lớn nhất mỗi phần là 200 </p>\n</li>\n</ul>\n<p><em>Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: <a href="http://www.spoj.com/problems/BOOKS1/">http://www.spoj.com/problems/BOOKS1/</a></em></p>\n<h3><strong>Phân tích:</strong></h3>\n<ul>\n<li>Với bài toán số lượng đầu vào khá lớn như này, ta sẽ không thể sử dụng thuật toán <a href="/the-algorithms-blog/category/vet-can-brute-force/">vét cạn - Brute force</a> + Ở đây ta sẽ dùng thuật toán <a href="/the-algorithms-blog/category/chia-de-tri-divide-and-conquer/">chia để trị - Divide and Conquer</a>.</li>\n</ul>\n<h2><strong>Lời giải:</strong></h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3><strong>Code C/C++:</strong></h3>\n<p><div id="gist91916588" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-books1-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-books1-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-books1-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-books1-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-books1-cpp-LC3" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-books1-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typedef</span> <span class="pl-k">long</span> <span class="pl-k">long</span> <span class="pl-k">int</span> ll;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-books1-cpp-LC5" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-books1-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">505</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-books1-cpp-LC7" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-books1-cpp-LC8" class="blob-code blob-code-inner js-file-line">ll M, K;                <span class="pl-c"><span class="pl-c">//</span> Lưu số lượng cuốn sách, và số phần cần chia</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-books1-cpp-LC9" class="blob-code blob-code-inner js-file-line">ll Left,Right, mid;        </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-books1-cpp-LC10" class="blob-code blob-code-inner js-file-line">ll Page[MAX];           <span class="pl-c"><span class="pl-c">//</span> Lưu số lượng trang sách của mỗi cuốn</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-books1-cpp-LC11" class="blob-code blob-code-inner js-file-line">ll Index[MAX];          <span class="pl-c"><span class="pl-c">//</span> Mảng lưu chỉ số của phần tử đầu tiên của mỗi phần</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-books1-cpp-LC12" class="blob-code blob-code-inner js-file-line">ll ValidIndex[MAX];     <span class="pl-c"><span class="pl-c">//</span> Kết quả cuối cùng</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-books1-cpp-LC13" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-books1-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Cập nhật lại từng phần sao cho tổng mỗi phần không lớn hơn mid</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-books1-cpp-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Update</span>(ll id)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-books1-cpp-LC16" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-books1-cpp-LC17" class="blob-code blob-code-inner js-file-line">    ll sum = <span class="pl-c1">0</span>, t = Index[id];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-books1-cpp-LC18" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-books1-cpp-LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(ll i = Index[id + <span class="pl-c1">1</span>] - <span class="pl-c1">1</span>; i &gt;= t; i--)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-books1-cpp-LC20" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-books1-cpp-LC21" class="blob-code blob-code-inner js-file-line">        sum += Page[i];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-books1-cpp-LC22" class="blob-code blob-code-inner js-file-line">        </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-books1-cpp-LC23" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(sum == mid)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-books1-cpp-LC24" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-books1-cpp-LC25" class="blob-code blob-code-inner js-file-line">            Index[id] = i;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-books1-cpp-LC26" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-books1-cpp-LC27" class="blob-code blob-code-inner js-file-line">        }<span class="pl-k">else</span> <span class="pl-k">if</span>(sum &gt; mid)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-books1-cpp-LC28" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-books1-cpp-LC29" class="blob-code blob-code-inner js-file-line">            Index[id] = i + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-books1-cpp-LC30" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-books1-cpp-LC31" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-books1-cpp-LC32" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-books1-cpp-LC33" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-books1-cpp-LC34" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-books1-cpp-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Kiểm tra xem với với số lượng lớn nhất của các phần là mid</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-books1-cpp-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> có hợp lệ hay không</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-books1-cpp-LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> <span class="pl-en">IsValid</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-books1-cpp-LC38" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-books1-cpp-LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; K; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-books1-cpp-LC40" class="blob-code blob-code-inner js-file-line">        Index[i] = i;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-books1-cpp-LC41" class="blob-code blob-code-inner js-file-line">    Index[K] = M;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-books1-cpp-LC42" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-books1-cpp-LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Cập nhật lại từng phần</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-books1-cpp-LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = K - <span class="pl-c1">1</span>; i &gt;= <span class="pl-c1">0</span>; i--)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-books1-cpp-LC45" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">Update</span>(i);</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-books1-cpp-LC46" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-books1-cpp-LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Nếu sau</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-books1-cpp-LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (Index[<span class="pl-c1">0</span>] &gt; <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-books1-cpp-LC49" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-books1-cpp-LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-books1-cpp-LC51" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-books1-cpp-LC52" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-books1-cpp-LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-books1-cpp-LC54" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-books1-cpp-LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">ios_base::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-books1-cpp-LC56" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-books1-cpp-LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> comment dòng này trước khi submit</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-books1-cpp-LC58" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-books1-cpp-LC59" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-books1-cpp-LC60" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">int</span> T;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-books1-cpp-LC61" class="blob-code blob-code-inner js-file-line">    cin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-books1-cpp-LC62" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-books1-cpp-LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-books1-cpp-LC64" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-books1-cpp-LC65" class="blob-code blob-code-inner js-file-line">        ll max_page = <span class="pl-c1">0</span>;        <span class="pl-c"><span class="pl-c">//</span> Tìm ra cuốn sách có nhiều trang nhất</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-books1-cpp-LC66" class="blob-code blob-code-inner js-file-line">        ll sum_page = <span class="pl-c1">0</span>;        <span class="pl-c"><span class="pl-c">//</span> Tìm tổng số trang</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-books1-cpp-LC67" class="blob-code blob-code-inner js-file-line">        </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-books1-cpp-LC68" class="blob-code blob-code-inner js-file-line">        cin &gt;&gt; M &gt;&gt; K;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-books1-cpp-LC69" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-books1-cpp-LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; M; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-books1-cpp-LC71" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-books1-cpp-LC72" class="blob-code blob-code-inner js-file-line">            cin &gt;&gt; Page[i];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-books1-cpp-LC73" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-books1-cpp-LC74" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(Page[i] &gt; max_page) max_page = Page[i];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-books1-cpp-LC75" class="blob-code blob-code-inner js-file-line">            sum_page += Page[i];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-books1-cpp-LC76" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-books1-cpp-LC77" class="blob-code blob-code-inner js-file-line">            </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-books1-cpp-LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Khi chia ra thành các phần, thì tổng lớn nhất của các phần</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-books1-cpp-LC79" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> sẽ nằm trong khoảng từ Left = max_page (số trang nhiều nhất)</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-books1-cpp-LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> và Right = sum_page (số trang nhiều nhất)</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-books1-cpp-LC81" class="blob-code blob-code-inner js-file-line">        Left  = max_page;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-books1-cpp-LC82" class="blob-code blob-code-inner js-file-line">        Right = sum_page;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-books1-cpp-LC83" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-books1-cpp-LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Triển khai thuật toán chia để trị</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-books1-cpp-LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> (Left &lt; Right)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-books1-cpp-LC86" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-books1-cpp-LC87" class="blob-code blob-code-inner js-file-line">            mid = (Left + Right) / <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-books1-cpp-LC88" class="blob-code blob-code-inner js-file-line">            </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-books1-cpp-LC89" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">IsValid</span>())</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-books1-cpp-LC90" class="blob-code blob-code-inner js-file-line">            {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-books1-cpp-LC91" class="blob-code blob-code-inner js-file-line">                Right = mid;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-books1-cpp-LC92" class="blob-code blob-code-inner js-file-line">                </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-books1-cpp-LC93" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> Ta dùng mảng để lưu lại chỉ số của các phần tử</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-books1-cpp-LC94" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> để phân chia các phần.</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-books1-cpp-LC95" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; K; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-books1-cpp-LC96" class="blob-code blob-code-inner js-file-line">                    ValidIndex[i] = Index[i];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L97" class="blob-num js-line-number" data-line-number="97"></td>\n        <td id="file-books1-cpp-LC97" class="blob-code blob-code-inner js-file-line">            }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L98" class="blob-num js-line-number" data-line-number="98"></td>\n        <td id="file-books1-cpp-LC98" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L99" class="blob-num js-line-number" data-line-number="99"></td>\n        <td id="file-books1-cpp-LC99" class="blob-code blob-code-inner js-file-line">            {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L100" class="blob-num js-line-number" data-line-number="100"></td>\n        <td id="file-books1-cpp-LC100" class="blob-code blob-code-inner js-file-line">                Left = mid + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L101" class="blob-num js-line-number" data-line-number="101"></td>\n        <td id="file-books1-cpp-LC101" class="blob-code blob-code-inner js-file-line">            }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L102" class="blob-num js-line-number" data-line-number="102"></td>\n        <td id="file-books1-cpp-LC102" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L103" class="blob-num js-line-number" data-line-number="103"></td>\n        <td id="file-books1-cpp-LC103" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L104" class="blob-num js-line-number" data-line-number="104"></td>\n        <td id="file-books1-cpp-LC104" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> In ra kết quả</span></td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L105" class="blob-num js-line-number" data-line-number="105"></td>\n        <td id="file-books1-cpp-LC105" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; K - <span class="pl-c1">1</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L106" class="blob-num js-line-number" data-line-number="106"></td>\n        <td id="file-books1-cpp-LC106" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L107" class="blob-num js-line-number" data-line-number="107"></td>\n        <td id="file-books1-cpp-LC107" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span>(<span class="pl-k">int</span> j = ValidIndex[i]; j &lt; ValidIndex[i+<span class="pl-c1">1</span>]; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L108" class="blob-num js-line-number" data-line-number="108"></td>\n        <td id="file-books1-cpp-LC108" class="blob-code blob-code-inner js-file-line">                cout &lt;&lt; Page[j] &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L109" class="blob-num js-line-number" data-line-number="109"></td>\n        <td id="file-books1-cpp-LC109" class="blob-code blob-code-inner js-file-line">            cout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span>/ <span class="pl-pds">&quot;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L110" class="blob-num js-line-number" data-line-number="110"></td>\n        <td id="file-books1-cpp-LC110" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L111" class="blob-num js-line-number" data-line-number="111"></td>\n        <td id="file-books1-cpp-LC111" class="blob-code blob-code-inner js-file-line">        </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L112" class="blob-num js-line-number" data-line-number="112"></td>\n        <td id="file-books1-cpp-LC112" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">int</span> i = ValidIndex[K-<span class="pl-c1">1</span>]; i &lt; M; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L113" class="blob-num js-line-number" data-line-number="113"></td>\n        <td id="file-books1-cpp-LC113" class="blob-code blob-code-inner js-file-line">        {</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L114" class="blob-num js-line-number" data-line-number="114"></td>\n        <td id="file-books1-cpp-LC114" class="blob-code blob-code-inner js-file-line">            cout &lt;&lt; Page[i];</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L115" class="blob-num js-line-number" data-line-number="115"></td>\n        <td id="file-books1-cpp-LC115" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(i == M-<span class="pl-c1">1</span>) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L116" class="blob-num js-line-number" data-line-number="116"></td>\n        <td id="file-books1-cpp-LC116" class="blob-code blob-code-inner js-file-line">            cout &lt;&lt; <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L117" class="blob-num js-line-number" data-line-number="117"></td>\n        <td id="file-books1-cpp-LC117" class="blob-code blob-code-inner js-file-line">        }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L118" class="blob-num js-line-number" data-line-number="118"></td>\n        <td id="file-books1-cpp-LC118" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L119" class="blob-num js-line-number" data-line-number="119"></td>\n        <td id="file-books1-cpp-LC119" class="blob-code blob-code-inner js-file-line">        cout &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L120" class="blob-num js-line-number" data-line-number="120"></td>\n        <td id="file-books1-cpp-LC120" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L121" class="blob-num js-line-number" data-line-number="121"></td>\n        <td id="file-books1-cpp-LC121" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L122" class="blob-num js-line-number" data-line-number="122"></td>\n        <td id="file-books1-cpp-LC122" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-books1-cpp-L123" class="blob-num js-line-number" data-line-number="123"></td>\n        <td id="file-books1-cpp-LC123" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/2f5addb15eaea55ac80b675d3b04de65/raw/ea4094f5cabf73953d88035cf3c5121c8ff9c0e0/BOOKS1.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/2f5addb15eaea55ac80b675d3b04de65#file-books1-cpp">BOOKS1.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm</em></p>',
id:"f:/Github/the-algorithms-blog/src/posts/2016-09-25---spoj-com-thuat-toan-bai-books1-copying-books/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài BOOKS1 – Copying Books",date:"25/09/2016",categories:["spoj","Chia để trị - Divide and Conquer"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","chia để trị divide and conquer"]},fields:{slug:"/spoj-com-thuat-toan-bai-books1-copying-books/"},excerpt:"Đề bài: Trước khi máy photo sách được phát minh ra, việc tạo ra một bản photo cho một quyển sách là vô cùng khó khăn. Tất cả nội dung phải…",timeToRead:8},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài AFS – Amazing Factor Sequence"},fields:{slug:"/spoj-com-thuat-toan-bai-afs-amazing-factor-sequence/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài EASUDOKU – Easy sudoku"},fields:{slug:"/spoj-com-thuat-toan-bai-easudoku-easy-sudoku/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-books1-copying-books/",prevSlug:"/spoj-com-thuat-toan-bai-afs-amazing-factor-sequence/",nextSlug:"/spoj-com-thuat-toan-bai-easudoku-easy-sudoku/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-books-1-copying-books-5173afbdba25ea9131d3.js.map