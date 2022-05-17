require "test_helper"

class BedtypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bedtype = bedtypes(:one)
  end

  test "should get index" do
    get bedtypes_url, as: :json
    assert_response :success
  end

  test "should create bedtype" do
    assert_difference("Bedtype.count") do
      post bedtypes_url, params: { bedtype: { name: @bedtype.name, size: @bedtype.size } }, as: :json
    end

    assert_response :created
  end

  test "should show bedtype" do
    get bedtype_url(@bedtype), as: :json
    assert_response :success
  end

  test "should update bedtype" do
    patch bedtype_url(@bedtype), params: { bedtype: { name: @bedtype.name, size: @bedtype.size } }, as: :json
    assert_response :success
  end

  test "should destroy bedtype" do
    assert_difference("Bedtype.count", -1) do
      delete bedtype_url(@bedtype), as: :json
    end

    assert_response :no_content
  end
end
