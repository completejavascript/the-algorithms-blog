webpackJsonp([0xee2e43b5a0c4],{841:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Chỉ có một cái máy in duy nhất và nó đang phải làm việc rất nhiều. Thỉnh thoảng có hàng trăm công việc ở hàng đợi của máy in. Và bạn phải đợi hàng giờ đồng hồ chỉ để in một trang giấy. </p>\n<p>Bởi vì một số công việc là quan trọng hơn những cái khác, nên Hacker General đã phát minh ra một hệ thống hàng đợi ưu tiên cho máy in. Bây giờ, mỗi công việc sẽ được gán một giá trị độ ưu tiên từ 1 đến 9. Trong đó, 9 là độ ưu tiên cao nhất và 1 là độ ưu tiên thấp nhất. Máy in làm việc theo nguyên lý sau: </p>\n<ul>\n<li>Công việc j đầu tiên được lấy từ hàng đợi</li>\n<li>Nếu có công việc nào mà độ ưu tiên cao hơn công việc j thì cho j xuống cuối của hàng đợi và không in nó.</li>\n<li>Ngược lại, in công việc j (không cho nó xuống cuối cùng của hàng đợi) </li>\n</ul>\n<p>Theo cách này, công việc in trở nên rất nhanh. Dĩ nhiên, sẽ có những cái phải chờ đợi để được in. Nhưng đó chính là cuộc sống. </p>\n<p>Vấn đề của bạn với chính sách mới này là rất khó để xác định xem khi nào thì công việc của bạn được in. Bạn quyết định viết một chương trình để xác định nó. Chương trình này được đưa cho trạng thái hiện tại của hàng đợi (danh sách của thứ tự ưu tiên), cũng như là vị trí công việc của bạn. Bạn phải tính được khi nào thì công việc của bạn được hoàn thành. Giả sử rằng sẽ không có công việc nào nữa được cho vào máy in. Để cho đơn giản, giả sử việc in một công việc mất 1 phút để hoàn thành. Việc cho vào hay lấy ra từ hàng đợi xảy ra tức thời.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số nguyên t, t &#x3C;= 100, là số lượng test case. Mỗi test case sẽ bao gồm 2 số nguyên n và m. Trong đó, n là số lượng công việc và m là vị trí công việc của bạn (1 ≤ <em>n</em> ≤ 100, 0 ≤ m ≤ n-1). Vị trí công việc đầu tiên là 0, công việc thứ 2 là 1,... Dòng tiếp theo là n số nguyên, thuộc từ 1 đến 9, cho biết độ ưu tiên của các công việc. Số đầu tiên là độ ưu tiên của công việc thứ nhất, số tiếp theo là độ ưu tiên của công việc thứ 2,...</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi một test case, in ra trên 1 dòng, chứa 1 số là số phút cần phải đợi cho đến khi công việc của bạn được hoàn thành. Giả sử không có công việc nào được thêm vào máy in.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>3\n1 0\n5\n4 2\n1 2 3 4\n6 0\n1 1 9 1 1 1\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<pre><code>1\n2\n5\n</code></pre>\n<p><em>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/PQUEUE/">http://www.spoj.com/problems/PQUEUE/</a></em></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài toán này hoàn toàn là việc sử dụng hàng đợi. Nên có thể xếp vào loạt bài sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a>.</p>\n</li>\n<li>\n<p>Một chú ý ở đây là: để đánh dấu vị trí công việc cần tìm thì tôi sẽ chuyển giá trị của nó về âm. Nghĩa là nếu công việc cần tính có độ ưu tiên là 6, thì tôi sẽ chuyển nó về -6. Như vậy, nếu muốn so sánh độ ưu tiên thì tôi chỉ cần so sánh giá trị tuyệt đối của chúng.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91919358" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-pqueue-cpp" class="file">\n    \n\n  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-pqueue-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-pqueue-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-pqueue-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-pqueue-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-pqueue-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">105</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-pqueue-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-pqueue-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N, M;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-pqueue-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> front, rear, leng, queue[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-pqueue-cpp-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> numMinute;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-pqueue-cpp-LC9" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-pqueue-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">Abs</span>(<span class="pl-k">int</span> a)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-pqueue-cpp-LC11" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-pqueue-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">if</span>(a &gt;= <span class="pl-c1">0</span>) <span class="pl-k">return</span> a;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-pqueue-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> -a;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-pqueue-cpp-LC14" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-pqueue-cpp-LC15" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-pqueue-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Enqueue</span>(<span class="pl-k">int</span> p)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-pqueue-cpp-LC17" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-pqueue-cpp-LC18" class="blob-code blob-code-inner js-file-line">\tqueue[rear] = p;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-pqueue-cpp-LC19" class="blob-code blob-code-inner js-file-line">\trear = (rear + <span class="pl-c1">1</span>) % MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-pqueue-cpp-LC20" class="blob-code blob-code-inner js-file-line">\tleng++;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-pqueue-cpp-LC21" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-pqueue-cpp-LC22" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-pqueue-cpp-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">Dequeue</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-pqueue-cpp-LC24" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-pqueue-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> p = queue[front];</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-pqueue-cpp-LC26" class="blob-code blob-code-inner js-file-line">\tfront = (front + <span class="pl-c1">1</span>) % MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-pqueue-cpp-LC27" class="blob-code blob-code-inner js-file-line">\tleng--;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-pqueue-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> p;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-pqueue-cpp-LC29" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-pqueue-cpp-LC30" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-pqueue-cpp-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-pqueue-cpp-LC32" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-pqueue-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-pqueue-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-pqueue-cpp-LC35" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-pqueue-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-pqueue-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-pqueue-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Nhập đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-pqueue-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; N &gt;&gt; M;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-pqueue-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-pqueue-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; queue[i];</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-pqueue-cpp-LC42" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-pqueue-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> Đánh dấu vị trí công việc cần hoàn thành </span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-pqueue-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c"><span class="pl-c">//</span> bằng cách chuyển về giá trị âm</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-pqueue-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\tqueue[M] = -queue[M];</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-pqueue-cpp-LC46" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-pqueue-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\tfront = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-pqueue-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\trear  = N;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-pqueue-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\tleng  = N;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-pqueue-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t\tnumMinute = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-pqueue-cpp-LC51" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-pqueue-cpp-LC52" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(leng &gt; <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-pqueue-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-pqueue-cpp-LC54" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> k = <span class="pl-c1">Dequeue</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-pqueue-cpp-LC55" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">bool</span> IsPrint = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-pqueue-cpp-LC56" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-pqueue-cpp-LC57" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Duyệt hàng đợi từ front đến rear</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-pqueue-cpp-LC58" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = front; i != rear; i = (i+<span class="pl-c1">1</span>) % MAX)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-pqueue-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-pqueue-cpp-LC60" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu tồn tại công việc có độ ưu tiên lớn hơn k</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-pqueue-cpp-LC61" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> thì cho k xuống cuối hàng đợi</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-pqueue-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(<span class="pl-c1">Abs</span>(k) &lt; <span class="pl-c1">Abs</span>(queue[i]))</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-pqueue-cpp-LC63" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-pqueue-cpp-LC64" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tIsPrint = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-pqueue-cpp-LC65" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-c1">Enqueue</span>(k);</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-pqueue-cpp-LC66" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-pqueue-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-pqueue-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-pqueue-cpp-LC69" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-pqueue-cpp-LC70" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Ngược lại, nếu không tìm thấy, thì chứng tỏ k có độ ưu tiên cao nhất.</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-pqueue-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(IsPrint)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-pqueue-cpp-LC72" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-pqueue-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t\t\t\tnumMinute++;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-pqueue-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu k &lt; 0 thì đó là công việc cần tìm</span></td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-pqueue-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(k &lt; <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-pqueue-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-pqueue-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tcout &lt;&lt; numMinute &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-pqueue-cpp-LC78" class="blob-code blob-code-inner js-file-line">\t\t\t\t\t<span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-pqueue-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-pqueue-cpp-LC80" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-pqueue-cpp-LC81" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-pqueue-cpp-LC82" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-pqueue-cpp-LC83" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-pqueue-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-pqueue-cpp-LC84" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/cbb115375250902b934cac750c5cc7a0/raw/15ba5acdcb81ed25e147b500397c53a2adda280f/PQUEUE.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/cbb115375250902b934cac750c5cc7a0#file-pqueue-cpp">PQUEUE.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div></p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-11-05---spoj-com-thuat-toan-bai-pqueue-printer-queue/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài PQUEUE - Printer Queue",date:"05/11/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-pqueue-printer-queue/"},excerpt:"Đề bài: Chỉ có một cái máy in duy nhất và nó đang phải làm việc rất nhiều. Thỉnh thoảng có hàng trăm công việc ở hàng đợi của máy in. Và bạn…",timeToRead:6},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài ONP - Transform the Expression"},fields:{slug:"/spoj-com-thuat-toan-bai-onp-transform-the-expression/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài PRIME1 - Prime Generator"},fields:{slug:"/spoj-com-thuat-toan-bai-prime1-prime-generator/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-pqueue-printer-queue/",prevSlug:"/spoj-com-thuat-toan-bai-onp-transform-the-expression/",nextSlug:"/spoj-com-thuat-toan-bai-prime1-prime-generator/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-pqueue-printer-queue-781ffb47bf8284e243fa.js.map