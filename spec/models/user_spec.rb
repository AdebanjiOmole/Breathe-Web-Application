require 'rails_helper'

describe User do
  let(:user) { build :user }
  subject { user }

#   it { should respond_to(:total) }
#   it { should respond_to(:user_id) }

it "is not valid without an email" do
    subject.email = nil
    expect(subject).to_not be_valid
  end
#   it { should validate_numericality_of(:total).is_greater_than_or_equal_to(0) }

#   it { should belong_to :user }
end