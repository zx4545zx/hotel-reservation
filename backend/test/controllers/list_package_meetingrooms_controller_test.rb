require "test_helper"

class ListPackageMeetingroomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list_package_meetingroom = list_package_meetingrooms(:one)
  end

  test "should get index" do
    get list_package_meetingrooms_url, as: :json
    assert_response :success
  end

  test "should create list_package_meetingroom" do
    assert_difference("ListPackageMeetingroom.count") do
      post list_package_meetingrooms_url, params: { list_package_meetingroom: { meeting_rooms_id: @list_package_meetingroom.meeting_rooms_id, packages_id: @list_package_meetingroom.packages_id } }, as: :json
    end

    assert_response :created
  end

  test "should show list_package_meetingroom" do
    get list_package_meetingroom_url(@list_package_meetingroom), as: :json
    assert_response :success
  end

  test "should update list_package_meetingroom" do
    patch list_package_meetingroom_url(@list_package_meetingroom), params: { list_package_meetingroom: { meeting_rooms_id: @list_package_meetingroom.meeting_rooms_id, packages_id: @list_package_meetingroom.packages_id } }, as: :json
    assert_response :success
  end

  test "should destroy list_package_meetingroom" do
    assert_difference("ListPackageMeetingroom.count", -1) do
      delete list_package_meetingroom_url(@list_package_meetingroom), as: :json
    end

    assert_response :no_content
  end
end
