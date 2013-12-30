require "open-uri"
require "nokogiri"

require_relative "../index.erb"

class BlogScraper
  attr_accessor :scraped_data

  def initialize(url)
    @scraped_data = Nokogiri::HTML(open(url))
  end

  def blog_title
    scraped_data.css("article .entry-title").first.text
  end

  def blog_date
    scraped_data.css("article time").first.text
  end

  def blog_body
    scraped_data.css("article .entry-content").first.text
  end

end

b = BlogScraper.new("http://stephaniehoh.github.io/")
# p b.blog_title
# p b.blog_date
# p b.blog_body

