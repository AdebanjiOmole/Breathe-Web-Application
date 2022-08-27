require 'rails_helper'

RSpec.describe Cart, type: :model do
    it {should respond_to (:line_items)}
    it {should respond_to (:products)}
end
