## Roadmap
私たちは「ハイブリッド表計算」という未踏の領域を開拓しています。
開発はオープンかつ迅速に進めています。

### ✅ Phase 1: The Foundation (Completed)
**「まずは、最強のローカルツールとして」**
クラウドに依存しない、圧倒的に高速な基盤を構築しました。
* **Local-First Engine:** Tauri v2 + SQLiteによるミリ秒単位の応答速度
* **High-Performance Grid:** 仮想スクロールによる100万行データの描画
* **Basic Calculation:** Excel互換の主要な数式・関数サポート

### 🚧 Phase 2: Connectivity & AI (Current Focus)
**「データをつなぎ、入力を自動化する」**
現在、クローズドベータに向けて鋭意実装中です。
* **Cloud Sync:** Go + gRPCによる、セキュアで堅牢なデバイス間同期
* **Magic Import:** 画像やPDFをドラッグするだけで、AIが表データへ構造化
* **Plugin System:** Pythonによるデータ分析スクリプトの実行環境

### 🚀 Phase 3: Team & Ecosystem (Coming 2026)
**「組織のOSになる」**
個人ツールから、チームのコラボレーション基盤へ。
* **Team Workspace:** リアルタイム共同編集とコメント機能
* **Advanced Security:** RLS（行レベルセキュリティ）による厳格な権限管理
* **Public API:** 外部ツール(Zapier等)との双方向連携