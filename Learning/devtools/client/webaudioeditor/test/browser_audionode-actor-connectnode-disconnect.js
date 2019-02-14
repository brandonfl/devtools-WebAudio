<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_audionode-actor-connectnode-disconnect.js - mozsearch</title>
  <link href="/static/css/mozsearch.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/icons.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/selector-common.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/filter.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/xcode.css" rel="stylesheet" type="text/css" media="screen"/>
</head>

<body class="old-rev">
  <form method="get" action="/mozilla-central/search" id="basic_search" class="search-box">
    <fieldset>
      <div id="search-box" class="h-flex-container" role="group">
        <div id="query-section">
          <label for="query" class="query_label visually-hidden">Find</label>
          <input type="text" name="q" value="" maxlength="2048" id="query" accesskey="s" title="Search" placeholder="Search mozilla-central" autocomplete="off" />
          <div class="zero-size-container">
            <div class="bubble" id="query-bubble">
            </div>
          </div>
          <section id="spinner"></section>
        </div>
        <div id="option-section" class="v-flex-container">
          <label for="case">
            <input type="checkbox" name="case" id="case" class="option-checkbox" value="true" accesskey="c"/><span class="access-key">C</span>ase-sensitive
          </label>
          <label for="regexp">
            <input type="checkbox" name="regexp" id="regexp" class="option-checkbox" value="true" accesskey="r"/><span class="access-key">R</span>egexp search
          </label>
        </div>
        <div id="path-section">
          <label for="query" class="query_label visually-hidden">Path</label>
          <input type="text" name="path" value="" maxlength="2048" id="path" accesskey="p" title="Path" placeholder="Path filter (supports globbing and ^, $)" autocomplete="off" />
          <div class="zero-size-container">
            <div class="bubble" id="path-bubble">
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <input type="submit" value="Search" class="visually-hidden" />
    <div id="revision">
      <span id="rev-id">Showing <a href="/mozilla-central/commit/01b4b3830ea3cae2e9e431019afa6391b471c6da">01b4b383</a>:</span>
      <span id="rev-desc">Backed out changeset bc69bea83b66 (bug <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1527522">1527522</a>) for wrench bustages. CLOSED TREE</span>
    </div>
  </form>
  <div id="content" class="content" data-no-results="No results for current query.">
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js">browser_audionode-actor-connectnode-disconnect.js</a></div>
<div class="panel">
  <button id="panel-toggle">
    <span class="navpanel-icon expanded" aria-hidden="false"></span>
    Navigation
  </button>
  <section id="panel-content" aria-expanded="true" aria-hidden="false">
  <label class="panel-accel"><input type="checkbox" id="panel-accel-enable" checked="checked">Enable keyboard shortcuts</label>
  <h4>Source code</h4>
  <ul>
  <li>
  <a href="https://bugzilla.mozilla.org/enter_bug.cgi?product=DevTools&component=Web Audio Editor" title="File a bug in DevTools :: Web Audio Editor" class="icon">File a bug in DevTools :: Web Audio Editor</a>
  </li>
  </ul>
  <h4>Revision control</h4>
  <ul>
  <li>
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
  </li>
  <li>
  <a href="javascript:alert('Hover over the gray bar on the left to see blame information.')" title="Blame" class="icon">Blame</a>
  </li>
  </ul>
  </section>
</div>
<table id="file" class="file">
  <thead class="visually-hidden">
    <th scope="col">Line</th>
    <th scope="col">Code</th>
  </thead>
  <tbody>
    <tr>
      <td id="line-numbers">
<span id="l1" class="line-number">1
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Tests that AudioNodeActor#connectNode() and AudioNodeActor#disconnect() work.</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > * Uses the editor front as the actors do not retain connect state.</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > */</span>
</code><code id="line-8" aria-labelledby="8">
</code><code id="line-9" aria-labelledby="9"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-10" aria-labelledby="10">  <span class="syn_reserved" >const</span> { <span data-symbols="7331-0" >target</span>, <span data-symbols="7331-1" >panel</span> } = await <span data-symbols="#initWebAudioEditor" data-i="1" >initWebAudioEditor</span>(<span data-symbols="#SIMPLE_CONTEXT_URL" data-i="2" >SIMPLE_CONTEXT_URL</span>);
</code><code id="line-11" aria-labelledby="11">  <span class="syn_reserved" >const</span> { <span data-symbols="7331-2" >panelWin</span> } = <span data-symbols="7331-1" >panel</span>;
</code><code id="line-12" aria-labelledby="12">  <span class="syn_reserved" >const</span> { <span data-symbols="7331-3" >gFront</span>, $, $$, <span data-symbols="7331-6" >EVENTS</span>, <span data-symbols="7331-7" >gAudioNodes</span> } = <span data-symbols="7331-2" >panelWin</span>;
</code><code id="line-13" aria-labelledby="13">
</code><code id="line-14" aria-labelledby="14">  <span class="syn_reserved" >const</span> <span data-symbols="7331-8" >events</span> = <span data-symbols="#Promise" data-i="3" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="4" >all</span>([
</code><code id="line-15" aria-labelledby="15">    <span data-symbols="#get3" data-i="5" >get3</span>(<span data-symbols="7331-3" >gFront</span>, <span class="syn_string" >"create-node"</span>),
</code><code id="line-16" aria-labelledby="16">    <span data-symbols="#waitForGraphRendered" data-i="6" >waitForGraphRendered</span>(<span data-symbols="7331-2" >panelWin</span>, 3, 2),
</code><code id="line-17" aria-labelledby="17">  ]);
</code><code id="line-18" aria-labelledby="18">  <span data-symbols="#reload" data-i="7" >reload</span>(<span data-symbols="7331-0" >target</span>);
</code><code id="line-19" aria-labelledby="19">  <span class="syn_reserved" >const</span> [<span data-symbols="7331-9" >actors</span>] = await <span data-symbols="7331-8" >events</span>;
</code><code id="line-20" aria-labelledby="20">  <span class="syn_reserved" >const</span> [<span data-symbols="7331-10" >dest</span>, <span data-symbols="7331-11" >osc</span>, <span data-symbols="7331-12" >gain</span>] = <span data-symbols="7331-9" >actors</span>;
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22">  <span data-symbols="#info" data-i="8" >info</span>(<span class="syn_string" >"Disconnecting oscillator..."</span>);
</code><code id="line-23" aria-labelledby="23">  <span data-symbols="7331-11" >osc</span>.<span data-symbols="#disconnect,osc#disconnect" data-i="9" >disconnect</span>();
</code><code id="line-24" aria-labelledby="24">  await <span data-symbols="#Promise" data-i="10" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="11" >all</span>([
</code><code id="line-25" aria-labelledby="25">    <span data-symbols="#waitForGraphRendered" data-i="12" >waitForGraphRendered</span>(<span data-symbols="7331-2" >panelWin</span>, 3, 1),
</code><code id="line-26" aria-labelledby="26">    <span data-symbols="#once" data-i="13" >once</span>(<span data-symbols="7331-7" >gAudioNodes</span>, <span class="syn_string" >"disconnect"</span>),
</code><code id="line-27" aria-labelledby="27">  ]);
</code><code id="line-28" aria-labelledby="28">  <span data-symbols="#ok" data-i="14" >ok</span>(<span class="syn_reserved" >true</span>, <span class="syn_string" >"Oscillator disconnected, event emitted."</span>);
</code><code id="line-29" aria-labelledby="29">
</code><code id="line-30" aria-labelledby="30">  <span data-symbols="#info" data-i="15" >info</span>(<span class="syn_string" >"Reconnecting oscillator..."</span>);
</code><code id="line-31" aria-labelledby="31">  <span data-symbols="7331-11" >osc</span>.<span data-symbols="#connectNode,osc#connectNode" data-i="16" >connectNode</span>(<span data-symbols="7331-12" >gain</span>);
</code><code id="line-32" aria-labelledby="32">  await <span data-symbols="#Promise" data-i="17" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="18" >all</span>([
</code><code id="line-33" aria-labelledby="33">    <span data-symbols="#waitForGraphRendered" data-i="19" >waitForGraphRendered</span>(<span data-symbols="7331-2" >panelWin</span>, 3, 2),
</code><code id="line-34" aria-labelledby="34">    <span data-symbols="#once" data-i="20" >once</span>(<span data-symbols="7331-7" >gAudioNodes</span>, <span class="syn_string" >"connect"</span>),
</code><code id="line-35" aria-labelledby="35">  ]);
</code><code id="line-36" aria-labelledby="36">  <span data-symbols="#ok" data-i="21" >ok</span>(<span class="syn_reserved" >true</span>, <span class="syn_string" >"Oscillator reconnected."</span>);
</code><code id="line-37" aria-labelledby="37">
</code><code id="line-38" aria-labelledby="38">  await <span data-symbols="#teardown" data-i="22" >teardown</span>(<span data-symbols="7331-0" >target</span>);
</code><code id="line-39" aria-labelledby="39">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[{"pretty":"initWebAudioEditor","sym":"#initWebAudioEditor"}],[{"pretty":"property initWebAudioEditor","sym":"#initWebAudioEditor"}]],[[{"pretty":"SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}],[{"pretty":"property SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[{"pretty":"get3","sym":"#get3"}],[{"pretty":"property get3","sym":"#get3"}]],[[{"pretty":"waitForGraphRendered","sym":"#waitForGraphRendered"}],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property disconnect","sym":"#disconnect"},{"pretty":"property osc.disconnect","sym":"osc#disconnect"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[{"pretty":"waitForGraphRendered","sym":"#waitForGraphRendered"}],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property connectNode","sym":"#connectNode"},{"pretty":"property osc.connectNode","sym":"osc#connectNode"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[{"pretty":"waitForGraphRendered","sym":"#waitForGraphRendered"}],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property teardown","sym":"#teardown"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_audionode-actor-connectnode-disconnect.js"></span>
  <script src="/static/js/libs/jquery-2.1.3.min.js"></script>
  <script src="/static/js/libs/nunjucks.min.js"></script>
  <script src="/static/js/utils.js"></script>
  <script src="/static/js/dxr.js"></script>
  <script src="/static/js/context-menu.js"></script>
  <script src="/static/js/filter.js"></script>
  <script src="/static/js/panel.js"></script>
  <script src="/static/js/code-highlighter.js"></script>
  <script src="/static/js/blame.js"></script>
  </body>
</html>
