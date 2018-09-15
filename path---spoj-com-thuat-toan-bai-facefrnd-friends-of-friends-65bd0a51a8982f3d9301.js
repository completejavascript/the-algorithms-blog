webpackJsonp([0xa3804d193042],{791:function(n,e){n.exports={data:{post:{html:'<h2>Đề bài:</h2>\n<p>Bob dùng trang mạng xã hội hầu hết thời gian. Anh ấy đã tò mò về vấn đề bạn của bạn trên trang mạng xã hội này. Nếu như X là bạn anh ấy. Và Y là bạn của X. Mà Y không phải bạn của anh ấy. Khi đó Y được gọi là bạn của bạn. Bạn phải tìm ra xem Bob có bao nhiêu bạn của bạn. Biết các ID được dùng trên mạng xã hội là số duy nhất bao gồm 4 chữ số.</p>\n<h3>Đầu vào:</h3>\n<p>Dòng đầu tiên là số nguyên N, 1 &#x3C;= N &#x3C;= 100 - là số bạn trên trang mạng xã hội của Bob. Sau đó là N dòng. Số đầu tiên của mỗi dòng là ID của bạn Bob và sau đó là số M (1 &#x3C;= M &#x3C;= 100) là số bạn của anh ta. Sau đó là M số nguyên là ID của những người bạn (không bao gồm Bob).</p>\n<h3>Đầu ra:</h3>\n<p>In ra một số nguyên xác định số bạn của bạn của Bob.</p>\n<h3>Ví dụ:</h3>\n<p><strong>Đầu vào:</strong></p>\n<pre><code>3\n2334 5 1256 4323 7687 3244 5678\n1256 2 2334 7687\n4323 5 2334 5678 6547 9766 9543\n</code></pre>\n<p><strong>Đầu ra:</strong></p>\n<p>6</p>\n<p>Các bạn có thể tham khảo link gốc đề bài và submit code tại đây: <a href="http://www.spoj.com/problems/FACEFRND/">http://www.spoj.com/problems/FACEFRND/</a></p>\n<h3>Phân tích:</h3>\n<ul>\n<li>\n<p>Bài toán có vẻ khá rõ ràng. Ở đây tôi sử dụng <a href="/the-algorithms-blog/category/tham-lam-greedy/">thuật toán tham lam Greedy</a> để giải bài toán. Tôi sẽ thực hiện đúng như trong đề bài. Đó là tìm ra những người là bạn của bạn Bob.</p>\n</li>\n<li>\n<p>Vì ID là một số duy nhất có 4 chữ số nên tôi sử dụng mảng đánh dấu gồm 10000 phần tử để đánh dấu trạng thái của các ID là bạn của Bob hay không, và đã xuất hiện chưa.</p>\n</li>\n<li>\n<p>Mời bạn theo dõi code sau để hiểu rõ hơn về cách triển khai của tôi.</p>\n</li>\n</ul>\n<h2>Lời giải:</h2>\n<p>(Các bạn nên tự mình nghĩ ra thuật toán của bài toán trước khi tham khảo code của tôi nhé. Hãy phát huy tối đa khả năng sáng tạo của bản thân. Hơn nữa code tôi viết ra cũng chưa thật sự tối ưu. Nên rất mong nhận được sự chia sẻ của các bạn.)</p>\n<h3>Code C/C++:</h3>\n<p><div id="gist91920670" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-facefrnd-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-facefrnd-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-facefrnd-cpp-LC1" class="blob-code blob-code-inner js-file-line">#<span class="pl-k">include</span><span class="pl-s"><span class="pl-pds">&lt;</span>iostream<span class="pl-pds">&gt;</span></span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-facefrnd-cpp-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">using</span> <span class="pl-k">namespace</span> <span class="pl-en">std</span><span class="pl-k">;</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-facefrnd-cpp-LC3" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-facefrnd-cpp-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">int</span> MAX = <span class="pl-c1">10005</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-facefrnd-cpp-LC5" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-facefrnd-cpp-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> exist[MAX];        <span class="pl-c"><span class="pl-c">//</span> Đánh dấu xem tồn tại hay chưa</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L7" class="blob-num js-line-number" data-line-number="7"></td>\n        <td id="file-facefrnd-cpp-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">bool</span> friend_bob[MAX];   <span class="pl-c"><span class="pl-c">//</span> có phải bạn của Bob không</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L8" class="blob-num js-line-number" data-line-number="8"></td>\n        <td id="file-facefrnd-cpp-LC8" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L9" class="blob-num js-line-number" data-line-number="9"></td>\n        <td id="file-facefrnd-cpp-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> <span class="pl-en">main</span>()</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L10" class="blob-num js-line-number" data-line-number="10"></td>\n        <td id="file-facefrnd-cpp-LC10" class="blob-code blob-code-inner js-file-line">{</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L11" class="blob-num js-line-number" data-line-number="11"></td>\n        <td id="file-facefrnd-cpp-LC11" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> Khởi tạo giá trị là false</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L12" class="blob-num js-line-number" data-line-number="12"></td>\n        <td id="file-facefrnd-cpp-LC12" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; MAX; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L13" class="blob-num js-line-number" data-line-number="13"></td>\n        <td id="file-facefrnd-cpp-LC13" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L14" class="blob-num js-line-number" data-line-number="14"></td>\n        <td id="file-facefrnd-cpp-LC14" class="blob-code blob-code-inner js-file-line">\t\texist[i] = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L15" class="blob-num js-line-number" data-line-number="15"></td>\n        <td id="file-facefrnd-cpp-LC15" class="blob-code blob-code-inner js-file-line">\t\tfriend_bob[i] = <span class="pl-c1">false</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L16" class="blob-num js-line-number" data-line-number="16"></td>\n        <td id="file-facefrnd-cpp-LC16" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L17" class="blob-num js-line-number" data-line-number="17"></td>\n        <td id="file-facefrnd-cpp-LC17" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L18" class="blob-num js-line-number" data-line-number="18"></td>\n        <td id="file-facefrnd-cpp-LC18" class="blob-code blob-code-inner js-file-line">\t<span class="pl-c"><span class="pl-c">//</span> đếm số lượng bạn của bạn</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L19" class="blob-num js-line-number" data-line-number="19"></td>\n        <td id="file-facefrnd-cpp-LC19" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> cnt_fof = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L20" class="blob-num js-line-number" data-line-number="20"></td>\n        <td id="file-facefrnd-cpp-LC20" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L21" class="blob-num js-line-number" data-line-number="21"></td>\n        <td id="file-facefrnd-cpp-LC21" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">int</span> n = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L22" class="blob-num js-line-number" data-line-number="22"></td>\n        <td id="file-facefrnd-cpp-LC22" class="blob-code blob-code-inner js-file-line">\tcin &gt;&gt; n;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L23" class="blob-num js-line-number" data-line-number="23"></td>\n        <td id="file-facefrnd-cpp-LC23" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">for</span>(<span class="pl-k">int</span> i = <span class="pl-c1">0</span>; i &lt; n; i++)</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L24" class="blob-num js-line-number" data-line-number="24"></td>\n        <td id="file-facefrnd-cpp-LC24" class="blob-code blob-code-inner js-file-line">\t{</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L25" class="blob-num js-line-number" data-line-number="25"></td>\n        <td id="file-facefrnd-cpp-LC25" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> id_fob = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L26" class="blob-num js-line-number" data-line-number="26"></td>\n        <td id="file-facefrnd-cpp-LC26" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; id_fob;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L27" class="blob-num js-line-number" data-line-number="27"></td>\n        <td id="file-facefrnd-cpp-LC27" class="blob-code blob-code-inner js-file-line">\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L28" class="blob-num js-line-number" data-line-number="28"></td>\n        <td id="file-facefrnd-cpp-LC28" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">if</span>(exist[id_fob])</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L29" class="blob-num js-line-number" data-line-number="29"></td>\n        <td id="file-facefrnd-cpp-LC29" class="blob-code blob-code-inner js-file-line">\t\t{ </td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L30" class="blob-num js-line-number" data-line-number="30"></td>\n        <td id="file-facefrnd-cpp-LC30" class="blob-code blob-code-inner js-file-line">\t\t\tcnt_fof--;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L31" class="blob-num js-line-number" data-line-number="31"></td>\n        <td id="file-facefrnd-cpp-LC31" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L32" class="blob-num js-line-number" data-line-number="32"></td>\n        <td id="file-facefrnd-cpp-LC32" class="blob-code blob-code-inner js-file-line">\t\tfriend_bob[id_fob] = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L33" class="blob-num js-line-number" data-line-number="33"></td>\n        <td id="file-facefrnd-cpp-LC33" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L34" class="blob-num js-line-number" data-line-number="34"></td>\n        <td id="file-facefrnd-cpp-LC34" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">int</span> m = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L35" class="blob-num js-line-number" data-line-number="35"></td>\n        <td id="file-facefrnd-cpp-LC35" class="blob-code blob-code-inner js-file-line">\t\tcin &gt;&gt; m;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L36" class="blob-num js-line-number" data-line-number="36"></td>\n        <td id="file-facefrnd-cpp-LC36" class="blob-code blob-code-inner js-file-line">\t\t<span class="pl-k">for</span>(<span class="pl-k">int</span> j = <span class="pl-c1">0</span>; j &lt; m; j++)</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L37" class="blob-num js-line-number" data-line-number="37"></td>\n        <td id="file-facefrnd-cpp-LC37" class="blob-code blob-code-inner js-file-line">\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L38" class="blob-num js-line-number" data-line-number="38"></td>\n        <td id="file-facefrnd-cpp-LC38" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">int</span> id_fof = <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L39" class="blob-num js-line-number" data-line-number="39"></td>\n        <td id="file-facefrnd-cpp-LC39" class="blob-code blob-code-inner js-file-line">\t\t\tcin &gt;&gt; id_fof;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L40" class="blob-num js-line-number" data-line-number="40"></td>\n        <td id="file-facefrnd-cpp-LC40" class="blob-code blob-code-inner js-file-line">\t\t\t</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L41" class="blob-num js-line-number" data-line-number="41"></td>\n        <td id="file-facefrnd-cpp-LC41" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Kiểm tra ID của bạn của bạn Bob xem có phải bạn của Bob không</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L42" class="blob-num js-line-number" data-line-number="42"></td>\n        <td id="file-facefrnd-cpp-LC42" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> và đã tồn tại hay chưa.</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L43" class="blob-num js-line-number" data-line-number="43"></td>\n        <td id="file-facefrnd-cpp-LC43" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-c"><span class="pl-c">//</span> Nếu thỏa mãn thì đánh dấu là đã tồn tại để khỏi bị lặp và tăng biến đếm lên</span></td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L44" class="blob-num js-line-number" data-line-number="44"></td>\n        <td id="file-facefrnd-cpp-LC44" class="blob-code blob-code-inner js-file-line">\t\t\t<span class="pl-k">if</span>(friend_bob[id_fof] == <span class="pl-c1">false</span> &amp;&amp; exist[id_fof] == <span class="pl-c1">false</span>)</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L45" class="blob-num js-line-number" data-line-number="45"></td>\n        <td id="file-facefrnd-cpp-LC45" class="blob-code blob-code-inner js-file-line">\t\t\t{</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L46" class="blob-num js-line-number" data-line-number="46"></td>\n        <td id="file-facefrnd-cpp-LC46" class="blob-code blob-code-inner js-file-line">\t\t\t\texist[id_fof] = <span class="pl-c1">true</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L47" class="blob-num js-line-number" data-line-number="47"></td>\n        <td id="file-facefrnd-cpp-LC47" class="blob-code blob-code-inner js-file-line">\t\t\t\tcnt_fof++;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L48" class="blob-num js-line-number" data-line-number="48"></td>\n        <td id="file-facefrnd-cpp-LC48" class="blob-code blob-code-inner js-file-line">\t\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L49" class="blob-num js-line-number" data-line-number="49"></td>\n        <td id="file-facefrnd-cpp-LC49" class="blob-code blob-code-inner js-file-line">\t\t}</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L50" class="blob-num js-line-number" data-line-number="50"></td>\n        <td id="file-facefrnd-cpp-LC50" class="blob-code blob-code-inner js-file-line">\t}</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L51" class="blob-num js-line-number" data-line-number="51"></td>\n        <td id="file-facefrnd-cpp-LC51" class="blob-code blob-code-inner js-file-line">\n</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L52" class="blob-num js-line-number" data-line-number="52"></td>\n        <td id="file-facefrnd-cpp-LC52" class="blob-code blob-code-inner js-file-line">\tcout &lt;&lt; cnt_fof &lt;&lt; endl;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L53" class="blob-num js-line-number" data-line-number="53"></td>\n        <td id="file-facefrnd-cpp-LC53" class="blob-code blob-code-inner js-file-line">\t<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>\n      </tr>\n      <tr>\n        <td id="file-facefrnd-cpp-L54" class="blob-num js-line-number" data-line-number="54"></td>\n        <td id="file-facefrnd-cpp-LC54" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n      <div class="gist-meta">\n        <a href="https://gist.github.com/completejavascript/ad1dc53e3c90ed4141e76db4a9cc3895/raw/7898d941753b2bee5bbcda056c28ded91669c1e0/FACEFRND.cpp" style="float:right">view raw</a>\n        <a href="https://gist.github.com/completejavascript/ad1dc53e3c90ed4141e76db4a9cc3895#file-facefrnd-cpp">FACEFRND.cpp</a>\n        hosted with &#10084; by <a href="https://github.com">GitHub</a>\n      </div>\n    </div>\n</div>\n</p>\n<p><em>Code by Phạm Văn Lâm.</em></p>',id:"F:/Github/the-algorithms-blog/src/posts/2016-12-03---spoj-com-thuat-toan-bai-facefrnd-friends-of-friends/spoj-com-thuat-toan-bai-facefrnd-friends-of-friends.md absPath of file >>> MarkdownRemark",frontmatter:{title:"SPOJ.COM – Thuật toán bài FACEFRND - Friends of Friends",date:"03/12/2016",categories:["spoj","Tham lam - Greedy"],tags:["phạm văn lâm","spoj.com","thuật toán","thuật toán spoj.com","tham lam greedy"]},fields:{slug:"/spoj-com-thuat-toan-bai-facefrnd-friends-of-friends/"},excerpt:"Đề bài: Bob dùng trang mạng xã hội hầu hết thời gian. Anh ấy đã tò mò về vấn đề bạn của bạn trên trang mạng xã hội này. Nếu như X là bạn anh…",timeToRead:4},prevPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài FASHION - Fashion Shows"},fields:{slug:"/spoj-com-thuat-toan-bai-fashion-fashion-shows/"}},nextPost:{frontmatter:{title:"SPOJ.COM – Thuật toán bài CTAIN - Containers"},fields:{slug:"/spoj-com-thuat-toan-bai-ctain-containers/"}},site:{siteMetadata:{title:"Algorithms Blog",siteUrl:"http://thuattoan.phamvanlam.com",twitterHandle:"@CmpltJavaScript",fbCommentId:"728566430818562"}}},pathContext:{slug:"/spoj-com-thuat-toan-bai-facefrnd-friends-of-friends/",prevSlug:"/spoj-com-thuat-toan-bai-fashion-fashion-shows/",nextSlug:"/spoj-com-thuat-toan-bai-ctain-containers/"}}}});
//# sourceMappingURL=path---spoj-com-thuat-toan-bai-facefrnd-friends-of-friends-65bd0a51a8982f3d9301.js.map