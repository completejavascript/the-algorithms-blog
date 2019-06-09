webpackJsonp([0xf1b6db64e0f6],{791:function(n,s){n.exports={data:{post:{html:'<h2><strong>Đề bài:</strong></h2>\n<p>Cho một số nguyên N. Tìm ra số lượng cách để biểu diễn số N thành tổng của tối đa 5 số lập phương.</p>\n<h3><strong>Đầu vào:</strong></h3>\n<p>1 dòng chứa số N, với 1 &#x3C;= N &#x3C;= 12500.</p>\n<h3><strong>Đầu ra:</strong></h3>\n<p>In ra kết quả về số lượng cách. </p>\n<p><strong>Ví dụ:</strong> </p>\n<p><strong>Đầu vào:</strong> </p>\n<p>64 </p>\n<p><strong>Đầu ra:</strong> </p>\n<p>2 </p>\n<p><strong>Giải thích:</strong> </p>\n<ul>\n<li>Cách 1: 64 = 27 + 27 + 8 + 1 + 1 + Cách 2: 64 = 64 + 0  + 0 + 0 + 0 </li>\n</ul>\n<p><em>Các bạn có thể tham khảo đề bài tiếng anh và submit code tại: <a href="http://www.spoj.com/problems/BOKAM143SOU/">http://www.spoj.com/problems/BOKAM143SOU/</a></em></p>\n<h3><strong>Phân tích:</strong></h3>\n<ul>\n<li>Trước tiên ta sẽ tìm tất cả những số lập phương không lớn hơn N + Sau đó kiểm tra tất cả các trường hợp có thể + Có nhiều cách triển khai, tuy nhiên ở đây tôi triển khai theo thuật toán <a href="/the-algorithms-blog/category/quay-lui-co-dieu-kien-backtracking/">quay lui có điều kiện - Backtracking</a></li>\n</ul>\n<h2><strong>Lời giải:</strong></h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3><strong>Code C/C++:</strong></h3>\n<p><div id="gist91916470" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-bokam143sou-cpp" class="file">\n    \n\n  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-c ">\n      \n<table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-bokam143sou-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-bokam143sou-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-bokam143sou-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-bokam143sou-cpp-LC3" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-bokam143sou-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> N;          <span class="pl-c"><span class="pl-c">//</span> Số đầu vào</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-bokam143sou-cpp-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Answer;     <span class="pl-c"><span class="pl-c">//</span> Số lượng cách</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-bokam143sou-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> A[<span class="pl-c1">51</span>];      <span class="pl-c"><span class="pl-c">//</span> Mảng lưu các số lập phương &lt;= N</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-bokam143sou-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> Leng;       <span class="pl-c"><span class="pl-c">//</span> Lưu số lượng các số lập phương &lt;= N</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-bokam143sou-cpp-LC8" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-bokam143sou-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-bokam143sou-cpp-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* num : số phần tử đã chọn, khi num = 5 thì sẽ được một cách</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-bokam143sou-cpp-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* sum : là tổng của các số đã chọn</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-bokam143sou-cpp-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* oldpos : lưu vị trí của số đã chọn lúc trước</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-bokam143sou-cpp-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* số chọn sau phải có vị trí lớn hơn hoặc bằng vị trí số chọn trước</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-bokam143sou-cpp-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* =&gt; các cách sẽ không bị lặp lại</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-bokam143sou-cpp-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-bokam143sou-cpp-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-en">Check</span>(<span class="pl-k">int</span> num, <span class="pl-k">int</span> sum, <span class="pl-k">int</span> oldpos)</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-bokam143sou-cpp-LC17" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-bokam143sou-cpp-LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Khi chọn đủ 5 số mà tổng các số đã chọn == N thì được 1 cách mới</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-bokam143sou-cpp-LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(num == <span class="pl-c1">5</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-bokam143sou-cpp-LC20" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-bokam143sou-cpp-LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(sum == N) Answer++;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-bokam143sou-cpp-LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-bokam143sou-cpp-LC23" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-bokam143sou-cpp-LC24" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-bokam143sou-cpp-LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Duyệt mảng các số lập phương &lt;= N để thử các số</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-bokam143sou-cpp-LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; Leng; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-bokam143sou-cpp-LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(i &gt;= oldpos)</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-bokam143sou-cpp-LC28" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">Check</span>(num + <span class="pl-c1">1</span>, sum + A[i], i);</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-bokam143sou-cpp-LC29" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-bokam143sou-cpp-LC30" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-bokam143sou-cpp-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-bokam143sou-cpp-LC32" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-bokam143sou-cpp-LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Comment dòng này trước khi submit</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-bokam143sou-cpp-LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">freopen</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.txt<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>r<span class="pl-pds">&quot;</span></span>,stdin);</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-bokam143sou-cpp-LC35" class="blob-code blob-code-inner js-file-line">    </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-bokam143sou-cpp-LC36" class="blob-code blob-code-inner js-file-line">    cin &gt;&gt; N;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-bokam143sou-cpp-LC37" class="blob-code blob-code-inner js-file-line">    Leng   = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-bokam143sou-cpp-LC38" class="blob-code blob-code-inner js-file-line">    Answer = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-bokam143sou-cpp-LC39" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-bokam143sou-cpp-LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Tìm ra tất cả các số lập phương &lt;= N và lưu vào 1 mảng</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-bokam143sou-cpp-LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(<span class="pl-c1">true</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-bokam143sou-cpp-LC42" class="blob-code blob-code-inner js-file-line">    {</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-bokam143sou-cpp-LC43" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">int</span> temp = (Leng * Leng * Leng);</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-bokam143sou-cpp-LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(temp &gt; N) <span class="pl-k">break</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-bokam143sou-cpp-LC45" class="blob-code blob-code-inner js-file-line">        A[Leng++] = temp;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-bokam143sou-cpp-LC46" class="blob-code blob-code-inner js-file-line">    }</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-bokam143sou-cpp-LC47" class="blob-code blob-code-inner js-file-line">    </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-bokam143sou-cpp-LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Bắt đầu backtrack để thử tất cả các trường hợp xảy ra</span></td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-bokam143sou-cpp-LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">Check</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, -<span class="pl-c1">1</span>);</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-bokam143sou-cpp-LC50" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-bokam143sou-cpp-LC51" class="blob-code blob-code-inner js-file-line">    cout &lt;&lt; Answer &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-bokam143sou-cpp-LC52" class="blob-code blob-code-inner js-file-line"> </td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-bokam143sou-cpp-LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-bokam143sou-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-bokam143sou-cpp-LC54" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/a8bcc9045a3918d9060463be6911ae75/raw/886a108efd7340e140f982488fdf1a6cdb4bdee4/BOKAM143SOU.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/a8bcc9045a3918d9060463be6911ae75#file-bokam143sou-cpp">BOKAM143SOU.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div></p>\n<p><em>Code by Phạm Văn Lâm</em></p>',id:"f:/Github/the-algorithms-blog/src/posts/2016-09-25---spoj-com-thuat-toan-bai-bokam143sou-checking-cubes/index.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài BOKAM143SOU – Checking cubes",date:"25/09/2016",categories:["spoj","Quay lui có điều kiện - Backtracking"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","quay lui có điều kiện backtracking"]},fields:{slug:"/spoj-com-thuat-toan-bai-bokam143sou-checking-cubes/"},excerpt:"Đề bài: Cho một số nguyên N. Tìm ra số lượng cách để biểu diễn số N thành tổng của tối đa 5 số lập phương. Đầu vào: 1 dòng chứa số N, với…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài EASUDOKU – Easy sudoku"},fields:{slug:"/spoj-com-thuat-toan-bai-easudoku-easy-sudoku/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài BENEFACT – The Benefactor"},fields:{slug:"/spoj-com-thuat-toan-bai-benefact-the-benefactor/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"https://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562",fbId:"100013577851883"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-bokam143sou-checking-cubes/",prevSlug:"/spoj-com-thuat-toan-bai-easudoku-easy-sudoku/",nextSlug:"/spoj-com-thuat-toan-bai-benefact-the-benefactor/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-bokam-143-sou-checking-cubes-8df0ac57b8edac99f9de.js.map