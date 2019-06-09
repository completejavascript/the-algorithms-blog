webpackJsonp([0xe3bda2008fcb],{796:function(n,l){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Như bạn đã biết, hầu hết mạng máy tính được tổ chức dạng cây, tức là mỗi máy tính sẽ có thể kết nối với một và chỉ một máy tính khác. Có một khái niệm đó là Time to Live (TTL) được xác định là sau bao nhiêu bước một gói tin trong mạng bị mất nếu như nó không thể tới đúng đích. Mục đích của TTL là để tránh trường hợp gói tin lan truyền vòng tròn trong mạng dẫn đến lỗi. </p>\n<p>Điểm đặt của bộ định tuyến (router) cái kết nối mạng với mạng khác là tối ưu khi mà giá trị lớn nhất cần có của TTL để gói tin được gửi từ router này sang bất kì router khác trong cùng một mạng là nhỏ nhất. </p>\n<p>Cho trước thông tin của mạng. Bạn hãy tính giá trị lớn nhất cần phải có của TTL ở mạng này nếu như bạn có thể chọn một máy tính làm vai trò của router.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên của đầu vào bao gồm số c, với <em>1 ≤ c ≤ 100</em>, là số lượng test case. Mỗi test case bắt đầu với một dòng chứa số N, là số lượng máy tính trong mạng <em>1 &#x3C; N ≤ 10<sup>5</sup></em>. Máy tính được đánh số từ 0 đến N - 1. Sau đó là N - 1 dòng, xác định kết nối giữa 2 máy tính, gồm 2 số a và b. Có nghĩa là máy tính a kết nối với máy tính b và ngược lại, <em>0 ≤ a,b &#x3C; N</em>.</p>\n<h3>Đầu ra:</h3>\n<p>Với mỗi test case, in ra một dòng chứa giá trị tối ưu nhất của TTL.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>3\n2\n1 0\n5\n3 2\n2 1\n0 2\n2 4\n9\n3 1\n6 5\n3 4\n0 3\n8 1\n1 7\n1 6\n2 3\n</code></pre>\n<p><strong>Đầu ra:</strong> </p>\n<pre><code>1\n1\n2\n</code></pre>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/GCPC11J/">http://www.spoj.com/problems/GCPC11J/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài này thực chất là tôi phải đi tìm khoảng cách lớn nhất của 2 điểm trên cây. Tôi sẽ sử dụng 2 lần <a href="/the-algorithms-blog/category/tim-kiem-theo-chieu-rong-bfs/">thuật toán tìm kiếm theo chiều rộng BFS</a> để tìm ra khoảng cách này. Lần thứ nhất tôi bắt đầu từ điểm bất kì và tìm ra điểm xa nhất so với điểm bắt đầu này. Sau khi tìm được điểm xa nhất trong lần thứ nhất, tôi sẽ tiếp tục áp dụng BFS lần thứ 2 từ điểm vừa mới tìm được. Và tôi lại tìm được điểm xa nhất so với điểm bắt đầu lần thứ 2. Lúc này tôi tìm được khoảng cách xa nhất giữa 2 điểm trên cây. Giả sử là x.</p>\n</li>\n<li>\n<p>Lúc này, nếu x chẵn thì giá trị TTL = x / 2. Còn nếu x lẻ thì TTL = x / 2 + 1.</p>\n</li>\n<li>\n<p>Một điểm chú ý ở đây là số điểm N khá lớn. Do đó tôi sẽ sử dụng danh sách liên kết để xác định liên kết giữa các điểm.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91920841" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-gcpc11j-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-gcpc11j-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-gcpc11j-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span> <span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-gcpc11j-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-gcpc11j-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-gcpc11j-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">100005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-gcpc11j-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-gcpc11j-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typedef</span> <span class="pl-k">struct</span> <span class="pl-en">Node</span></td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-gcpc11j-cpp-LC7" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-gcpc11j-cpp-LC8" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> id;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-gcpc11j-cpp-LC9" class="blob-code blob-code-inner js-file-line">\tNode *next;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-gcpc11j-cpp-LC10" class="blob-code blob-code-inner js-file-line">}Node;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-gcpc11j-cpp-LC11" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-gcpc11j-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">class</span> <span class="pl-en">List</span></td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-gcpc11j-cpp-LC13" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-gcpc11j-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public:</span> </td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-gcpc11j-cpp-LC15" class="blob-code blob-code-inner js-file-line">\tNode *begin;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-gcpc11j-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public:</span></td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-gcpc11j-cpp-LC17" class="blob-code blob-code-inner js-file-line">\t<span class="pl-en">List</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-gcpc11j-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-gcpc11j-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t\tbegin = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-gcpc11j-cpp-LC20" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-gcpc11j-cpp-LC21" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-gcpc11j-cpp-LC22" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">void</span> <span class="pl-en">Add</span>(<span class="pl-k">int</span> id)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-gcpc11j-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-gcpc11j-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t\tNode *tmp = <span class="pl-k">new</span> Node;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-gcpc11j-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\ttmp-&gt;<span class="pl-smi">id</span>\t  = id;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-gcpc11j-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\ttmp-&gt;<span class="pl-smi">next</span> = begin;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-gcpc11j-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\tbegin = tmp;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-gcpc11j-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-gcpc11j-cpp-LC29" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-gcpc11j-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> <span class="pl-en">GetLength</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-gcpc11j-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-gcpc11j-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> cnt = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-gcpc11j-cpp-LC33" class="blob-code blob-code-inner js-file-line">\t\tNode *p = begin;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-gcpc11j-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span> (p!=<span class="pl-c1">0</span>) </td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-gcpc11j-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-gcpc11j-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t\tcnt++;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-gcpc11j-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t\tp = p-&gt;<span class="pl-smi">next</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-gcpc11j-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-gcpc11j-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">return</span> cnt;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-gcpc11j-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-gcpc11j-cpp-LC41" class="blob-code blob-code-inner js-file-line">};</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-gcpc11j-cpp-LC42" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-gcpc11j-cpp-LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N, Answer, IdMax;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-gcpc11j-cpp-LC44" class="blob-code blob-code-inner js-file-line">List MyList[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-gcpc11j-cpp-LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span>  Mark[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-gcpc11j-cpp-LC46" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-gcpc11j-cpp-LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> queue[MAX];</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-gcpc11j-cpp-LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> fr, re, leng;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-gcpc11j-cpp-LC49" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-gcpc11j-cpp-LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">EnQueue</span>(<span class="pl-k">int</span> id)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-gcpc11j-cpp-LC51" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-gcpc11j-cpp-LC52" class="blob-code blob-code-inner js-file-line">\tqueue[re] = id;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-gcpc11j-cpp-LC53" class="blob-code blob-code-inner js-file-line">\tre = (re + <span class="pl-c1">1</span>) % MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-gcpc11j-cpp-LC54" class="blob-code blob-code-inner js-file-line">\tleng++;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L55" class="blob-num js-line-number" data-line-number="55"></td>\n        <td id="file-gcpc11j-cpp-LC55" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L56" class="blob-num js-line-number" data-line-number="56"></td>\n        <td id="file-gcpc11j-cpp-LC56" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L57" class="blob-num js-line-number" data-line-number="57"></td>\n        <td id="file-gcpc11j-cpp-LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">DeQueue</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L58" class="blob-num js-line-number" data-line-number="58"></td>\n        <td id="file-gcpc11j-cpp-LC58" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L59" class="blob-num js-line-number" data-line-number="59"></td>\n        <td id="file-gcpc11j-cpp-LC59" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> p = queue[fr];</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L60" class="blob-num js-line-number" data-line-number="60"></td>\n        <td id="file-gcpc11j-cpp-LC60" class="blob-code blob-code-inner js-file-line">\tfr = (fr + <span class="pl-c1">1</span>) % MAX;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L61" class="blob-num js-line-number" data-line-number="61"></td>\n        <td id="file-gcpc11j-cpp-LC61" class="blob-code blob-code-inner js-file-line">\tleng--;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L62" class="blob-num js-line-number" data-line-number="62"></td>\n        <td id="file-gcpc11j-cpp-LC62" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> p;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L63" class="blob-num js-line-number" data-line-number="63"></td>\n        <td id="file-gcpc11j-cpp-LC63" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L64" class="blob-num js-line-number" data-line-number="64"></td>\n        <td id="file-gcpc11j-cpp-LC64" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L65" class="blob-num js-line-number" data-line-number="65"></td>\n        <td id="file-gcpc11j-cpp-LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">BFS</span>(<span class="pl-k">int</span> u)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L66" class="blob-num js-line-number" data-line-number="66"></td>\n        <td id="file-gcpc11j-cpp-LC66" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L67" class="blob-num js-line-number" data-line-number="67"></td>\n        <td id="file-gcpc11j-cpp-LC67" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L68" class="blob-num js-line-number" data-line-number="68"></td>\n        <td id="file-gcpc11j-cpp-LC68" class="blob-code blob-code-inner js-file-line">\t\tMark[i] = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L69" class="blob-num js-line-number" data-line-number="69"></td>\n        <td id="file-gcpc11j-cpp-LC69" class="blob-code blob-code-inner js-file-line">\tfr = re = leng = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L70" class="blob-num js-line-number" data-line-number="70"></td>\n        <td id="file-gcpc11j-cpp-LC70" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L71" class="blob-num js-line-number" data-line-number="71"></td>\n        <td id="file-gcpc11j-cpp-LC71" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">EnQueue</span>(u);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L72" class="blob-num js-line-number" data-line-number="72"></td>\n        <td id="file-gcpc11j-cpp-LC72" class="blob-code blob-code-inner js-file-line">\tMark[u] = <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L73" class="blob-num js-line-number" data-line-number="73"></td>\n        <td id="file-gcpc11j-cpp-LC73" class="blob-code blob-code-inner js-file-line">\t</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L74" class="blob-num js-line-number" data-line-number="74"></td>\n        <td id="file-gcpc11j-cpp-LC74" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">while</span>(leng &gt; <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L75" class="blob-num js-line-number" data-line-number="75"></td>\n        <td id="file-gcpc11j-cpp-LC75" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L76" class="blob-num js-line-number" data-line-number="76"></td>\n        <td id="file-gcpc11j-cpp-LC76" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> v = <span class="pl-c1">DeQueue</span>();</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L77" class="blob-num js-line-number" data-line-number="77"></td>\n        <td id="file-gcpc11j-cpp-LC77" class="blob-code blob-code-inner js-file-line">\t\tNode *p = MyList[v].<span class="pl-smi">begin</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L78" class="blob-num js-line-number" data-line-number="78"></td>\n        <td id="file-gcpc11j-cpp-LC78" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L79" class="blob-num js-line-number" data-line-number="79"></td>\n        <td id="file-gcpc11j-cpp-LC79" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">while</span>(p != <span class="pl-c1">0</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L80" class="blob-num js-line-number" data-line-number="80"></td>\n        <td id="file-gcpc11j-cpp-LC80" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L81" class="blob-num js-line-number" data-line-number="81"></td>\n        <td id="file-gcpc11j-cpp-LC81" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> k = p-&gt;<span class="pl-smi">id</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L82" class="blob-num js-line-number" data-line-number="82"></td>\n        <td id="file-gcpc11j-cpp-LC82" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(!Mark[k])</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L83" class="blob-num js-line-number" data-line-number="83"></td>\n        <td id="file-gcpc11j-cpp-LC83" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L84" class="blob-num js-line-number" data-line-number="84"></td>\n        <td id="file-gcpc11j-cpp-LC84" class="blob-code blob-code-inner js-file-line">\t\t\t\tMark[k] = Mark[v] + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L85" class="blob-num js-line-number" data-line-number="85"></td>\n        <td id="file-gcpc11j-cpp-LC85" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-k">if</span>(Mark[k] &gt; Answer)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L86" class="blob-num js-line-number" data-line-number="86"></td>\n        <td id="file-gcpc11j-cpp-LC86" class="blob-code blob-code-inner js-file-line">\t\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L87" class="blob-num js-line-number" data-line-number="87"></td>\n        <td id="file-gcpc11j-cpp-LC87" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tIdMax = k;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L88" class="blob-num js-line-number" data-line-number="88"></td>\n        <td id="file-gcpc11j-cpp-LC88" class="blob-code blob-code-inner js-file-line">\t\t\t\t\tAnswer = Mark[k];</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L89" class="blob-num js-line-number" data-line-number="89"></td>\n        <td id="file-gcpc11j-cpp-LC89" class="blob-code blob-code-inner js-file-line">\t\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L90" class="blob-num js-line-number" data-line-number="90"></td>\n        <td id="file-gcpc11j-cpp-LC90" class="blob-code blob-code-inner js-file-line">\t\t\t\t<span class="pl-c1">EnQueue</span>(k);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L91" class="blob-num js-line-number" data-line-number="91"></td>\n        <td id="file-gcpc11j-cpp-LC91" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L92" class="blob-num js-line-number" data-line-number="92"></td>\n        <td id="file-gcpc11j-cpp-LC92" class="blob-code blob-code-inner js-file-line">\t\t\tp = p-&gt;<span class="pl-smi">next</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L93" class="blob-num js-line-number" data-line-number="93"></td>\n        <td id="file-gcpc11j-cpp-LC93" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L94" class="blob-num js-line-number" data-line-number="94"></td>\n        <td id="file-gcpc11j-cpp-LC94" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L95" class="blob-num js-line-number" data-line-number="95"></td>\n        <td id="file-gcpc11j-cpp-LC95" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L96" class="blob-num js-line-number" data-line-number="96"></td>\n        <td id="file-gcpc11j-cpp-LC96" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L97" class="blob-num js-line-number" data-line-number="97"></td>\n        <td id="file-gcpc11j-cpp-LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L98" class="blob-num js-line-number" data-line-number="98"></td>\n        <td id="file-gcpc11j-cpp-LC98" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L99" class="blob-num js-line-number" data-line-number="99"></td>\n        <td id="file-gcpc11j-cpp-LC99" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c1">ios::sync_with_stdio</span>(<span class="pl-c1">false</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L100" class="blob-num js-line-number" data-line-number="100"></td>\n        <td id="file-gcpc11j-cpp-LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>\tfreopen(&quot;input.txt&quot;,&quot;r&quot;,stdin);</span></td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L101" class="blob-num js-line-number" data-line-number="101"></td>\n        <td id="file-gcpc11j-cpp-LC101" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L102" class="blob-num js-line-number" data-line-number="102"></td>\n        <td id="file-gcpc11j-cpp-LC102" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> T;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L103" class="blob-num js-line-number" data-line-number="103"></td>\n        <td id="file-gcpc11j-cpp-LC103" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; T;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L104" class="blob-num js-line-number" data-line-number="104"></td>\n        <td id="file-gcpc11j-cpp-LC104" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L105" class="blob-num js-line-number" data-line-number="105"></td>\n        <td id="file-gcpc11j-cpp-LC105" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> tc = <span class="pl-c1">0</span>; tc &lt; T; tc++)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L106" class="blob-num js-line-number" data-line-number="106"></td>\n        <td id="file-gcpc11j-cpp-LC106" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L107" class="blob-num js-line-number" data-line-number="107"></td>\n        <td id="file-gcpc11j-cpp-LC107" class="blob-code blob-code-inner js-file-line">\t\tIdMax = Answer = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L108" class="blob-num js-line-number" data-line-number="108"></td>\n        <td id="file-gcpc11j-cpp-LC108" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; N;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L109" class="blob-num js-line-number" data-line-number="109"></td>\n        <td id="file-gcpc11j-cpp-LC109" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L110" class="blob-num js-line-number" data-line-number="110"></td>\n        <td id="file-gcpc11j-cpp-LC110" class="blob-code blob-code-inner js-file-line">\t\t\tMyList[i].<span class="pl-smi">begin</span> = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L111" class="blob-num js-line-number" data-line-number="111"></td>\n        <td id="file-gcpc11j-cpp-LC111" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L112" class="blob-num js-line-number" data-line-number="112"></td>\n        <td id="file-gcpc11j-cpp-LC112" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> a,b;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L113" class="blob-num js-line-number" data-line-number="113"></td>\n        <td id="file-gcpc11j-cpp-LC113" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; N-<span class="pl-c1">1</span>; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L114" class="blob-num js-line-number" data-line-number="114"></td>\n        <td id="file-gcpc11j-cpp-LC114" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L115" class="blob-num js-line-number" data-line-number="115"></td>\n        <td id="file-gcpc11j-cpp-LC115" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; a &gt;&gt; b;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L116" class="blob-num js-line-number" data-line-number="116"></td>\n        <td id="file-gcpc11j-cpp-LC116" class="blob-code blob-code-inner js-file-line">\t\t\tMyList[a].<span class="pl-c1">Add</span>(b);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L117" class="blob-num js-line-number" data-line-number="117"></td>\n        <td id="file-gcpc11j-cpp-LC117" class="blob-code blob-code-inner js-file-line">\t\t\tMyList[b].<span class="pl-c1">Add</span>(a);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L118" class="blob-num js-line-number" data-line-number="118"></td>\n        <td id="file-gcpc11j-cpp-LC118" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L119" class="blob-num js-line-number" data-line-number="119"></td>\n        <td id="file-gcpc11j-cpp-LC119" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L120" class="blob-num js-line-number" data-line-number="120"></td>\n        <td id="file-gcpc11j-cpp-LC120" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">BFS</span>(<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L121" class="blob-num js-line-number" data-line-number="121"></td>\n        <td id="file-gcpc11j-cpp-LC121" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-c1">BFS</span>(IdMax);</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L122" class="blob-num js-line-number" data-line-number="122"></td>\n        <td id="file-gcpc11j-cpp-LC122" class="blob-code blob-code-inner js-file-line">\t\tAnswer--;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L123" class="blob-num js-line-number" data-line-number="123"></td>\n        <td id="file-gcpc11j-cpp-LC123" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L124" class="blob-num js-line-number" data-line-number="124"></td>\n        <td id="file-gcpc11j-cpp-LC124" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(Answer%<span class="pl-c1">2</span>==<span class="pl-c1">0</span>) Answer /= <span class="pl-c1">2</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L125" class="blob-num js-line-number" data-line-number="125"></td>\n        <td id="file-gcpc11j-cpp-LC125" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">else</span> Answer = Answer / <span class="pl-c1">2</span> + <span class="pl-c1">1</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L126" class="blob-num js-line-number" data-line-number="126"></td>\n        <td id="file-gcpc11j-cpp-LC126" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L127" class="blob-num js-line-number" data-line-number="127"></td>\n        <td id="file-gcpc11j-cpp-LC127" class="blob-code blob-code-inner js-file-line">\t\tcout &lt;&lt; Answer &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L128" class="blob-num js-line-number" data-line-number="128"></td>\n        <td id="file-gcpc11j-cpp-LC128" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L129" class="blob-num js-line-number" data-line-number="129"></td>\n        <td id="file-gcpc11j-cpp-LC129" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-gcpc11j-cpp-L130" class="blob-num js-line-number" data-line-number="130"></td>\n        <td id="file-gcpc11j-cpp-LC130" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/7c0408471d02c4fd63002513dcd99e1b/raw/505c48ae9a491b01331808df69b24d3289d03dc9/GCPC11J.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/7c0408471d02c4fd63002513dcd99e1b#file-gcpc11j-cpp">GCPC11J.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',
id:"F:/Github/the-algorithms-blog/src/posts/2016-12-05---spoj-com-thuat-toan-bai-gcpc11j-time-to-live/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài GCPC11J - Time to live",date:"05/12/2016",categories:["spoj","Tìm kiếm theo chiều rộng - BFS"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tìm kiếm theo chiều rộng bfs"]},fields:{slug:"/spoj-com-thuat-toan-bai-gcpc11j-time-to-live/"},excerpt:"Đề bài: Như bạn đã biết, hầu hết mạng máy tính được tổ chức dạng cây, tức là mỗi máy tính sẽ có thể kết nối với một và chỉ một máy tính khác…",timeToRead:7},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài GGD - Mr Toothless and His GCD Operatione"},fields:{slug:"/spoj-com-thuat-toan-bai-ggd-mr-toothless-and-his-gcd-operation/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài VMSUBSTR - Vườn cây của ba"},fields:{slug:"/spoj-com-thuat-toan-bai-vmsubstr-vuon-cay-cua-ba/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-gcpc11j-time-to-live/",prevSlug:"/spoj-com-thuat-toan-bai-ggd-mr-toothless-and-his-gcd-operation/",nextSlug:"/spoj-com-thuat-toan-bai-vmsubstr-vuon-cay-cua-ba/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-gcpc-11-j-time-to-live-d5569d9c8feba5f44f10.js.map