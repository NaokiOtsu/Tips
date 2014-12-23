# Gruntfile.jsに記述
# css_dir = "./../html/smart/onepi/css"
# sass_dir = "./"
# images_dir = "./../html/i/onepi/"
# output_style = :expanded
# line_comments = true
# relative_assets = true

# キャッシュバスターをタイムスタンプからMD5ハッシュ(10文字)に変更する
asset_cache_buster do |path, file|
  if File.file?(file.path)
    Digest::MD5.hexdigest(File.read(file.path))[0, 10]
  else
    $stderr.puts "WARNING: '#{File.basename(path)}' was not found (or cannot be read) in #{File.dirname(file.path)}"
  end
end

# スプライト画像生成時に生成されたファイル名に自動的に付けられるハッシュ文字列を削除する
on_sprite_saved do |filename|
  if File.file?(filename)
    FileUtils.mv filename, filename.gsub(%r{-s[0-9a-f]{10}(\.\w+)}, '\1')
  end
end

# スプライト画像生成時に生成されたファイル名に自動的に付けられるハッシュ文字列を削除し、
# キャッシュバスターとして利用する
# device-pixel-ratioの分数内に挿入される半角スペースを削除
on_stylesheet_saved do |filename|
  if File.file?(filename)
    css = File.read(filename)
    File.open(filename, 'w+') do |f|
      f << css.gsub(%r{-s([0-9a-f]{10})(\.\w+)}, '\2?\1').gsub(%r{(device-aspect-ratio:\s*)(\d+)\s*(/)\s*(\d+)}, '\1\2\3\4')
    end
  end
end

# disable asset cache buster
# asset_cache_buster do |http_path, real_path|
#   nil
# end
